    import express from "express";
    import { signup, signin, signout } from "../controllers/auth.controller.js";

    const router = express.Router();

    // Routes
    router.post("/signup", signup);   // POST /api/auth/signup
    router.post("/signin", signin);   // POST /api/auth/signin
    router.get("/signout", signout);  // GET /api/auth/signout

    export default router;