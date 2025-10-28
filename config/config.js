const config = {
  env: process.env.NODE_ENV || 'development',

  // Backend port
  port: process.env.PORT || 5000,

  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",

  // MongoDB URI — use local MongoDB by default
  mongoUri: process.env.MONGODB_URI || "mongodb://localhost:27017/Portfolio"
};

export default config;