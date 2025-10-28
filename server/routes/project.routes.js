import express from "express";
import {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject,
  deleteAllProjects,
} from "../controllers/project.controller.js";

import { authMiddleware } from "../middleware/auth.js";

const router = express.Router();

// Protect all routes with JWT
router.use(authMiddleware);

// CRUD routes
router.post("/", createProject);           // Create new project
router.get("/", getAllProjects);          // Get all projects
router.get("/:id", getProjectById);       // Get project by ID
router.put("/:id", updateProject);        // Update project by ID
router.delete("/:id", deleteProject);     // Delete project by ID
router.delete("/", deleteAllProjects);    // Delete all projects

export default router;