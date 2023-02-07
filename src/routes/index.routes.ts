import { Router } from "express";
import { getCompany, saveCompany,userById } from "../controllers/index.controllers";
const router = Router();
router.get("/", getCompany);
router.get("/:id", userById);
router.post("/", saveCompany);
export default router;
