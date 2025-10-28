import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compress from "compression";
import cors from "cors";
import helmet from "helmet";

// Import routes
import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";
import contactRoutes from "./routes/contact.routes.js";
import projectRoutes from "./routes/project.routes.js";
import qualificationRoutes from "./routes/qualification.routes.js";

// Import JWT middleware
import { authMiddleware } from "./middleware/auth.js";

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors());

// Root route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to User application." });
});

// Public routes
app.use("/api/auth", authRoutes); // Signup, Signin, Signout

// Protected routes
app.use("/api/users", authMiddleware, userRoutes);
app.use("/api/contacts", authMiddleware, contactRoutes);
app.use("/api/projects", authMiddleware, projectRoutes);
app.use("/api/qualifications", authMiddleware, qualificationRoutes);

// Error handling
app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({ error: err.name + ": " + err.message });
  } else if (err) {
    res.status(400).json({ error: err.name + ": " + err.message });
    console.log(err);
  }
});

export default app;