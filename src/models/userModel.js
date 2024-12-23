const mongoose = require('mongoose');

// Define the user schema with only the required fields
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },  // Store the password in plaintext
  role: { type: String, enum: ['ntcAdmin', 'operator'], required: true }  // Only 'ntcAdmin' or 'operator' roles
});

// Create the User model
const User = mongoose.model('User', userSchema);

module.exports = User;
