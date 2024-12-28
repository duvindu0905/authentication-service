const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authorizeRole = require('../utils/authorizeRole');  // Import the middleware

// Define the POST route for general login
router.post('/login', authController.login);

// Define the GET route to get all users (only accessible by ntcAdmin)
router.get('/users', authorizeRole('ntcAdmin'), authController.getAllUsers);  // Protect this route

module.exports = router;
