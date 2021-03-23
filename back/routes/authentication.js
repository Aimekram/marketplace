const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { User } = require('../models');

/**
 * @method - POST
 * @param - /signup
 * @description - user signUp
 */

router.post('/signup', async (req, res) => {
	console.log(req.body);
	const { email: userEmail, password: userPassword } = req.body;

	let user = await User.findOne({
		email: userEmail,
	});
	if (user) {
		return res
			.status(400)
			.send('Wygląda na to, że masz już u nas konto - zaloguj się'); //TODO: make this message appear on front?
	}
	try {
		const hashedPassword = await bcrypt.hash(userPassword, 10);
		user = new User({
			email: userEmail,
			password: hashedPassword,
		});
		user.save();
		res.status(201).json(user);
	} catch {
		res.status(500).send(); //TODO: what's correct status here?
	}
});

/**
 * @method - POST
 * @param - /login
 * @description - user login
 */

router.post('/login', async (req, res) => {
	const { email: userEmail, password: userPassword } = req.body;
	const user = await User.findOne({
		email: userEmail,
	});
	if (user === null) {
		return res.status(400).send('Cannot find user');
	}
	try {
		if (await bcrypt.compare(userPassword, user.password)) {
			res.send('Success');
		} else {
			res.send('Not allowed');
		}
	} catch {
		res.status(500).send('Error'); //TODO: what's correct status here?
	}
});

module.exports = router;
