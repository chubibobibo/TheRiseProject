import express from "express";
import {
  addProject,
  getAllOpenProj,
} from "../controllers/projectController.js";
const router = express.Router();

router.get("/openProjects", getAllOpenProj);
router.post("/addProject", addProject);

export default router;
