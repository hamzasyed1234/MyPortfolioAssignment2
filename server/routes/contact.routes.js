import express from "express";
import {
  createContact,
  getAllContacts,
  getContactById,
  updateContact,
  deleteContact,
  deleteAllContacts,
} from "../controllers/contact.controller.js";

import { authMiddleware } from "../middleware/auth.js";

const router = express.Router();

// Protect all routes with JWT
router.use(authMiddleware);

// CRUD routes
router.post("/", createContact);           // Create new contact
router.get("/", getAllContacts);          // Get all contacts
router.get("/:id", getContactById);       // Get contact by ID
router.put("/:id", updateContact);        // Update contact by ID
router.delete("/:id", deleteContact);     // Delete contact by ID
router.delete("/", deleteAllContacts);    // Delete all contacts

export default router;