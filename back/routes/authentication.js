const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { User } = require('../models');
const generateAccessToken = require('../utils/generateAccessToken');

/**
 * @method - POST
 * @param - /signup
 * @description - user signUp
 */

router.post('/signup', async (req, res) => {
	console.log(req.body);
	const { email: userEmail, password: userPassword } = req.body;

	// check if all data provided
	if (!email || !password) {
		return res.status(400).send('Please enter all fields');
	}

	// check if user already exists
	let user = await User.findOne({
		email: userEmail,
	});

	if (user) {
		return res.status(400).send('User with provided email already exists');
	}

	// create new User
	try {
		const hashedPassword = await bcrypt.hash(userPassword, 10);
		user = new User({
			email: userEmail,
			password: hashedPassword,
		});
		user.save();
		res.status(201).json(user.email);
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
			// create access token
			const accessToken = generateAccessToken(user.email);
			// TODO: make use of refresh tokens
			const refreshToken = jwt.sign(
				user.email,
				process.env.JWT_REFRESH_SECRET
			);
			res.json({ accessToken: accessToken, refreshToken: refreshToken });
		} else {
			res.send('Invalid credentials');
		}
	} catch {
		res.status(500).send('Error'); //TODO: what's correct status here?
	}
});

module.exports = router;
