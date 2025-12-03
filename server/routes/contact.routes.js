import express from 'express';
import { createContact, getAllContacts, deleteContact } from '../controllers/contact.controller.js';
import requireAuth from '../middleware/auth.js';
import { requireAdmin } from '../middleware/roleCheck.js';

const router = express.Router();

// Public route
router.post('/', createContact);  // Changed from submitContact

// Protected routes (admin only)
router.get('/', requireAuth, requireAdmin, getAllContacts);
router.delete('/:id', requireAuth, requireAdmin, deleteContact);

export default router;