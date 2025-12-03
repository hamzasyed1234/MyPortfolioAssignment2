// Check if user has admin role
export const requireAdmin = (req, res, next) => {
  // req.user is set by authMiddleware
  if (!req.user) {
    return res.status(401).json({ 
      message: "Authentication required" 
    });
  }

  if (req.user.role !== "admin") {
    return res.status(403).json({ 
      message: "Access denied. Admin privileges required." 
    });
  }

  next(); // User is admin, proceed
};

// Optional: middleware to check if user is authenticated (similar to authMiddleware but for optional auth)
export const optionalAuth = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];
  
  if (!token) {
    return next(); // No token, continue without user
  }

  try {
    const jwt = require("jsonwebtoken");
    const config = require("../../config/config.js").default;
    const decoded = jwt.verify(token, config.jwtSecret);
    req.user = decoded;
  } catch (err) {
    // Invalid token, but don't block request
  }
  
  next();
};