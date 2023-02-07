import { Router } from "express";
import { getCompany } from "../controllers/index.controllers";
const router = Router();
router.get("/", getCompany);

export default router;
