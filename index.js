// Import necessary modules
const dotenv = require('dotenv');  // To load environment variables from .env file
dotenv.config();  // Load environment variables from .env file

// Import the app from app.js
const app = require('./src/app');  // Adjust path as needed

// Define the port from environment variables or default to 8088 (authentication service)
const PORT = process.env.PORT || 8088;  // Default to 8088 if not specified in .env

// Start the Express server
app.listen(PORT, () => {
  console.log(`${process.env.npm_package_name}@${process.env.npm_package_version} start`);
  console.log(`Authentication Service is running on http://localhost:${PORT}`);
});
