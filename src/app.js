require('dotenv').config();  // Load environment variables from .env file
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');  // Import authentication routes
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection (no need for useNewUrlParser or useUnifiedTopology anymore)
mongoose.connect(process.env.AUTHENTICATION_URL)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Failed to connect to MongoDB', err));

// Routes
app.use('/authentication-service', authRoutes);  // Set up authentication routes

module.exports = app;
