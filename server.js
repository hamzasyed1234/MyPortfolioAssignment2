import config from "./config/config.js";
import app from "./server/express.js";
import mongoose from "mongoose";

import projectRoutes from "./server/routes/project.routes.js";
app.use("/api/projects", projectRoutes);

import qualificationRoutes from "./server/routes/qualification.routes.js";
app.use("/api/qualifications", qualificationRoutes);


// Import routes and auth middleware
import userRoutes from "./server/routes/user.routes.js";
import contactRoutes from "./server/routes/contact.routes.js";
import { authMiddleware } from "./server/middleware/auth.js";

mongoose.Promise = global.Promise;

// Connect to MongoDB
mongoose
  .connect(config.mongoUri, {})
  .then(() => {
    console.log("✅ Connected to the database!");
  })
  .catch((err) => console.error("❌ Database connection error:", err));

// Handle connection errors
mongoose.connection.on("error", () => {
  throw new Error(`unable to connect to database: ${config.mongoUri}`);
});

// Root route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to User application." });
});

// Protect all /api/users routes with JWT middleware
app.use("/api/users", authMiddleware, userRoutes);

// Protect all /api/contacts routes with JWT middleware
app.use("/api/contacts", authMiddleware, contactRoutes);

// Start server
app.listen(config.port, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.info(`✅ Server started on port ${config.port}`);
  }
});