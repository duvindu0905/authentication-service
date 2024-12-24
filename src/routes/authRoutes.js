const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');  // Import the correct controller

// Define the POST route for general login (using the login function)
router.post('/login', authController.login);  // General login route

// Define the GET route to get all users (using the getAllUsers function)
router.get('/users', authController.getAllUsers);  // Get all users route

// Route to register a new user (operator in your case)
router.post('/users', authController.registerUser);

module.exports = router;
