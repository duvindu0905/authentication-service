const mongoose = require('mongoose');

// Define the schema for authentication data (authentications collection)
const authSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },  // Store the password in plaintext
  role: { type: String, enum: ['ntcAdmin', 'operator'], required: true }  // Only 'ntcAdmin' or 'operator' roles
});

// Create a model for the authentications collection
const Authentication = mongoose.model('Authentication', authSchema, 'authentications');  // 'authentications' collection

// Authenticate function
const authenticate = async (username, password) => {
  // Find the user by username in the 'authentications' collection
  const user = await Authentication.findOne({ username });
  if (!user) return null;  // If no user is found, return null

  // Compare the entered password with the stored password (plaintext)
  if (password === user.password) {
    return user;  // Return the user if passwords match
  }

  return null;  // Return null if passwords do not match
};

module.exports = { authenticate };
