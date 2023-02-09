import { Router } from "express";
import {
  getCompany,
  saveCompany,
  userById,
  updateUser,
} from "../controllers/index.controllers";
const router = Router();
router.get("/", getCompany);
router.get("/:id", userById);
router.post("/", saveCompany);
router.put("/:id", updateUser);
export default router;
