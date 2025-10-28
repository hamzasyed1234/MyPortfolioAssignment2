import express from "express";
import {
  createQualification,
  getAllQualifications,
  getQualificationById,
  updateQualification,
  deleteQualification,
  deleteAllQualifications,
} from "../controllers/qualification.controller.js";

import { authMiddleware } from "../middleware/auth.js";

const router = express.Router();

// Protect all routes with JWT
router.use(authMiddleware);

// CRUD routes
router.post("/", createQualification);           // Create new qualification
router.get("/", getAllQualifications);          // Get all qualifications
router.get("/:id", getQualificationById);       // Get qualification by ID
router.put("/:id", updateQualification);        // Update qualification by ID
router.delete("/:id", deleteQualification);     // Delete qualification by ID
router.delete("/", deleteAllQualifications);    // Delete all qualifications

export default router;