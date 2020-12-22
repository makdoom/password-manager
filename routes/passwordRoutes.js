import express from "express";
import {
  addPassword,
  fetchPasswords,
  updatePassword,
  deletePassword,
} from "../controllers/passwordsController.js";
import { passwordAuth } from "../middelware/passwordsAuth.js";

const router = express.Router();

// GET all passwords
router.get("/sync-passwords", passwordAuth, fetchPasswords);

// Add password
router.post("/add", passwordAuth, addPassword);

// update password
router.post("/update", passwordAuth, updatePassword);

// delete password
router.delete("/delete", passwordAuth, deletePassword);

export default router;
