import express from "express";
import { addPassword } from "../controllers/passwordsController.js";
import { passwordAuth } from "../middelware/passwordsAuth.js";

const router = express.Router();

// GET all passwords
router.get("/sync", (req, res) => {
  res.send("Password added");
});

// Add password
router.post("/add", passwordAuth, addPassword);
export default router;
