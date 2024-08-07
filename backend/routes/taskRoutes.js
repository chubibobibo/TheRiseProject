import express from "express";
import { addTask } from "../controllers/taskControllers.js";
const router = express.Router();

router.post("/addTask", addTask);

export default router;
