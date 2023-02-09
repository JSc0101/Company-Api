import { Router } from "express";
import {
  getCompany,
  saveCompany,
  userById,
  updateUser,
  deleteUser
} from "../controllers/index.controllers";
const router = Router();
router.get("/", getCompany);
router.get("/:id", userById);
router.post("/", saveCompany);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
