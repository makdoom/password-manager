import express from "express";

import { signup, login, logout } from "../controllers/authController.js";
const router = express.Router();

// Sinup request
router.post("/signup", signup);

// Login request
router.post("/login", login);

router.get("/dashboard", (req, res) => res.status(200));

// Logout request
router.get("/logout", logout);

export default router;
