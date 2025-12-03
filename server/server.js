import dotenv from "dotenv";
dotenv.config();

import expressApp from "./express.js";
import mongoose from "mongoose";

// ----- Routes -----
import authRoutes from "./routes/auth.routes.js";
import projectRoutes from "./routes/project.routes.js";
import qualificationRoutes from "./routes/qualification.routes.js";
import userRoutes from "./routes/user.routes.js";
import contactRoutes from "./routes/contact.routes.js";
import requireAuth from "./middleware/auth.js";

const app = expressApp;

// ----------------------------
// CONNECT TO MONGODB ATLAS
// ----------------------------
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Atlas Connected");
  })
  .catch((err) => {
    console.error("❌ Database connection error:", err);
  });

mongoose.connection.on("error", () => {
  console.error("❌ Lost connection to MongoDB Atlas");
});

// ----------------------------
// ROUTES
// ----------------------------

// Public routes (no auth)
app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/qualifications", qualificationRoutes);

// Protected routes (JWT required)
app.use("/api/users", requireAuth, userRoutes);
app.use("/api/contacts", requireAuth, contactRoutes);

// Root route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to User application." });
});

// ----------------------------
// START SERVER
// ----------------------------
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
