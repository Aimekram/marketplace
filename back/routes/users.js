const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const { User } = require('../models');

/**
 * @method - Get
 * @param - /
 * @description - get users
 */

router.get('/', async (req, res) => {
	try {
		const users = await User.find();
		res.status(200).json(users);
	} catch (error) {
		res.status(500);
		res.send(
			`Unable to get users. Something went wrong with connecting to Database: ${error}`
		);
	}
});

/**
 * @method - GET
 * @param - /:id
 * @description - get user by id
 */

router.get('/:id', async (req, res) => {
	const user = await User.findById(req.params.id);
	res.status(200).json(user);
});

module.exports = router;
