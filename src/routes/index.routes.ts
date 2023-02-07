import { Router } from "express";
import { getCompany, saveCompany } from "../controllers/index.controllers";
const router = Router();
router.get("/", getCompany);
router.post("/", saveCompany);
export default router;
