const jwt = require('jsonwebtoken');  // Import the jsonwebtoken library

// Function to generate JWT token
const generateToken = (userId, role) => {
  const payload = { userId, role };  // Add the user ID and role to the token payload

  // Sign and return the token using the secret from environment variables
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });  // Token expires in 1 hour
};

module.exports = generateToken;
