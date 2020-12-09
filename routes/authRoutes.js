import express from "express";

import { signup, login } from "../controllers/authController.js";
const router = express.Router();

// GET
router.get("/", (req, res) => {
  res.send("Welcome");
});

router.post("/signup", signup);
router.post("/login", login);

export default router;
