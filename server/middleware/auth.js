import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';
import config from '../../config/config.js';

// Middleware to verify JWT token
const requireAuth = async (req, res, next) => {
  try {
    // Get token from header or cookie
    const token = req.headers.authorization?.split(' ')[1] || req.cookies.token;
    
    if (!token) {
      return res.status(401).json({ 
        error: 'Authentication required. No token provided.' 
      });
    }

    // Verify token
    const decoded = jwt.verify(token, config.jwtSecret);
    
    // Find user and attach to request
    const user = await User.findById(decoded._id).select('-password');
    
    if (!user) {
      return res.status(401).json({ 
        error: 'User not found. Invalid token.' 
      });
    }

    req.user = user;
    req.userId = user._id;
    next();
  } catch (error) {
    return res.status(401).json({ 
      error: 'Invalid or expired token. Please login again.' 
    });
  }
};

export default requireAuth;