const jwt = require('jsonwebtoken');
require('dotenv/config');

const generateAccessToken = (user) =>
	jwt.sign({ user }, process.env.JWT_SECRET, {
		expiresIn: `${process.env.JWT_EXPIRATION_TIME}`,
	});

module.exports = generateAccessToken;
