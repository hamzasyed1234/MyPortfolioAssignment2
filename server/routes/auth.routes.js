import express from "express";
import { signup, signin } from "../controllers/auth.controller.js";

const router = express.Router();

// Routes
router.post("/signup", signup);   // POST /api/auth/signup
router.post("/signin", signin);   // POST /api/auth/signin

export default router;