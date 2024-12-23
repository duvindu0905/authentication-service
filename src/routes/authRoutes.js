const express = require('express');
const authController = require('../controllers/authController');  // Import the correct controller
const router = express.Router();

// Define the POST route for login
router.post('/login', authController.login);  // Ensure the 'login' function is correctly passed here

module.exports = router;
