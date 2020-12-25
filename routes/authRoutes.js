import express from "express";

import { signup, login, logout } from "../controllers/authController.js";
import { requireAuth } from "../middelware/authMiddelware.js";
const router = express.Router();

// Sinup request
router.post("/signup", signup);

// Login request
router.post("/login", login);

// Dashboard request
router.get("/dash", requireAuth);

// Logout request
router.get("/logout", logout);

export default router;
