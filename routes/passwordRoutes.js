import express from "express";
import {
  addPassword,
  fetchPasswords,
} from "../controllers/passwordsController.js";
import { passwordAuth } from "../middelware/passwordsAuth.js";

const router = express.Router();

// GET all passwords
router.get("/sync-passwords", passwordAuth, fetchPasswords);

// Add password
router.post("/add", passwordAuth, addPassword);

export default router;
