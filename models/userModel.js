const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A user must have a name'],
    trim: true,
    minlength: [4, 'A user name must have more or equal then 4 characters'],
    maxlength: [40, 'A user name must have less or equal then 40 characters'],
  },
  email: {
    type: String,
    required: [true, 'A user must have a name'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  },
  photo: {
    type: String,
  },
  password: {
    type: String,
    required: [true, 'A user must have a password'],
    minlength: [8, 'A user password must have more or equal then 8 characters'],
  },
  passwordConfirm: {
    type: String,
    required: [true, 'A user must confirm the password'],
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
