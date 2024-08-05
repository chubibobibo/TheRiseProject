import express from "express";
import { addProject } from "../controllers/projectController.js";
const router = express.Router();

router.post("/addProject", addProject);

export default router;
