const { SecretManagerServiceClient } = require('@google-cloud/secret-manager');
const jwt = require('jsonwebtoken');

// Initialize the Secret Manager client
const client = new SecretManagerServiceClient();

// Function to retrieve the JWT secret from Secret Manager
async function getJWTSecret() {
  const secretName = 'projects/static-battery-442718-g9/secrets/jwt-secret/versions/latest';  // Replace with your project ID and secret name

  try {
    const [version] = await client.accessSecretVersion({ name: secretName });
    const secretPayload = version.payload.data.toString();  // Get the secret value as a string
    return secretPayload;
  } catch (error) {
    console.error('Error accessing secret:', error);
    throw new Error('Unable to retrieve JWT secret');
  }
}

// Function to generate JWT token
const generateToken = async (userId, role) => {
  const payload = { userId, role };

  // Retrieve JWT secret from Secret Manager
  const secret = await getJWTSecret();

  // Sign and return the token using the retrieved secret
  return jwt.sign(payload, secret, { expiresIn: '1h' });  // Token expires in 1 hour
};

module.exports = { generateToken };
