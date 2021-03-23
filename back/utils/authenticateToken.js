const jwt = require('jsonwebtoken');
require('dotenv/config');

const authenticateToken = (req, res, next) => {
	const authHeader = req.headers['authorization'];
	const token = authHeader && authHeader.split(' ')[1];
	if (token === null) return res.sendStatus(401);

	jwt.verify(token, process.env.JWT_SECRET, (error, userEmail) => {
		if (error) return res.sendStatus(403);
		req.email = userEmail;
		next();
	});
};

module.exports = authenticateToken;
