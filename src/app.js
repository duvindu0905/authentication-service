require('dotenv').config();  // Load environment variables from .env file
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');  // Import authentication routes
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const cors = require('cors');
const swaggerDocument = require('../swagger/swagger.json'); 

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection (no need for useNewUrlParser or useUnifiedTopology anymore)
mongoose.connect(process.env.AUTHENTICATION_URL)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Failed to connect to MongoDB', err));

  // Serve Swagger API documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
app.use('/authentication-service', authRoutes);  // Set up authentication routes

module.exports = app;
