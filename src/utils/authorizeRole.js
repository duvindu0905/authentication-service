const jwt = require('jsonwebtoken');

// Middleware to check JWT token and enforce role-based access control (RBAC)
const authorizeRole = (role) => {
  return (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
      return res.status(403).json({ message: 'Access denied: No token provided' });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);  // Verify JWT token
      req.user = decoded;  // Attach decoded JWT to the request object

      // Check if the user's role matches the required role
      if (req.user.role !== role) {
        return res.status(403).json({ message: 'Access denied: Insufficient role' });
      }

      next();  // Proceed to the next middleware or route handler
    } catch (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }
  };
};

module.exports = authorizeRole;
