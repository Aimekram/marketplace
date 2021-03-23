const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const validateEmail = function (email) {
	const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	return re.test(email);
};

const userSchema = new Schema({
	email: {
		type: String,
		trim: true,
		lowercase: true,
		unique: true,
		required: 'Email address is required',
		validate: [validateEmail, 'Please fill a valid email address'],
		match: [
			/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
			'Please fill a valid email address',
		],
	},
	password: {
		type: String,
		minlength: 6,
		maxlength: 100,
		required: 'Password is required',
	},
	date: { type: Date, default: Date.now },
	token: {
		type: String,
	},
});

const User = mongoose.model('User', userSchema);

module.exports = User;
