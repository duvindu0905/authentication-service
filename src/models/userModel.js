const mongoose = require('mongoose');

// Define the user schema with only the required fields
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },  // Store the password in plaintext (for demo purposes, not recommended for production)
  role: { type: String, enum: ['ntcAdmin', 'operator'], required: true }  // Only 'ntcAdmin' or 'operator' roles
});

// Automatically remove _id and __v from the response
userSchema.set('toJSON', {
  transform: (doc, ret) => {
    delete ret._id; // Remove _id
    delete ret.__v; // Remove __v
    return ret; // Return the transformed object
  },
});

// Create the User model
const User = mongoose.model('User', userSchema);

module.exports = User;
