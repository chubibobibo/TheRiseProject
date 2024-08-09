import express from "express";
import {
  addTask,
  getAllTasks,
  getSingleTask,
} from "../controllers/taskControllers.js";
const router = express.Router();

router.get("/allTasks", getAllTasks);
router.get("/singleTask/:id", getSingleTask);
router.post("/addTask", addTask);

export default router;
