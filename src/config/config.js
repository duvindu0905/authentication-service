require('dotenv').config();  // Load environment variables from .env

module.exports = {
  JWT_SECRET: process.env.JWT_SECRET,
  DB_URL: process.env.AUTHENTICATION_URL,
  PORT: process.env.PORT || 3000,  // Default to 3000 if not set
};
