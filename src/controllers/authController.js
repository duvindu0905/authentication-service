const userService = require('../services/userService');  // Import user service
const generateToken = require('../utils/generateToken');  // Import token generation utility

// Login route handler
const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Authenticate the user
    const user = await userService.authenticate(username, password);
    
    // If user not found or password mismatch, return 401 Unauthorized
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = generateToken(user._id, user.role);  // Pass user id and role for token payload

    // Send the token as the response
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { login };
