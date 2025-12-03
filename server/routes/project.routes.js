import express from "express";
import {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject,
  deleteAllProjects,
} from "../controllers/project.controller.js";

import requireAuth from "../middleware/auth.js";
import { requireAdmin } from "../middleware/roleCheck.js";

const router = express.Router();

// Public routes - anyone can view projects
router.get("/", getAllProjects);          // Get all projects
router.get("/:id", getProjectById);       // Get project by ID

// Admin-only routes - managing projects
router.post("/", requireAuth, requireAdmin, createProject);           // Create new project
router.put("/:id", requireAuth, requireAdmin, updateProject);        // Update project by ID
router.delete("/:id", requireAuth, requireAdmin, deleteProject);     // Delete project by ID
router.delete("/", requireAuth, requireAdmin, deleteAllProjects);    // Delete all projects

export default router;