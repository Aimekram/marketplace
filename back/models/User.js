const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    minlength: 5,
    maxlength: 50
  },
  password: {
    type: String,
    minlength: 6,
    maxlength: 100
  },
  date: { type: Date, default: Date.now }
//   googleId: String

});

const User = mongoose.model('User', userSchema);

module.exports = User;