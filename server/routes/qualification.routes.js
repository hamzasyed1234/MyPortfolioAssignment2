import express from "express";
import {
  createQualification,
  getAllQualifications,
  getQualificationById,
  updateQualification,
  deleteQualification,
  deleteAllQualifications,
} from "../controllers/qualification.controller.js";

import requireAuth from "../middleware/auth.js";
import { requireAdmin } from "../middleware/roleCheck.js";

const router = express.Router();

// Public routes - anyone can view qualifications
router.get("/", getAllQualifications);          // Get all qualifications
router.get("/:id", getQualificationById);       // Get qualification by ID

// Admin-only routes - managing qualifications
router.post("/", requireAuth, requireAdmin, createQualification);           // Create new qualification
router.put("/:id", requireAuth, requireAdmin, updateQualification);        // Update qualification by ID
router.delete("/:id", requireAuth, requireAdmin, deleteQualification);     // Delete qualification by ID
router.delete("/", requireAuth, requireAdmin, deleteAllQualifications);    // Delete all qualifications

export default router;