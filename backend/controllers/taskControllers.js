import "express-async-errors";
import { ExpressError } from "../expressError/expressError.js";
import { TaskModel } from "../models/TaskSchema.js";

export const addTask = async (req, res) => {
  if (!req.body) {
    throw new ExpressError("No data received");
  }
  const newTask = await TaskModel.create(req.body);
  if (!newTask) {
    throw new ExpressError("Cannot create a task", 400);
  }
  res.status(200).json({ message: "New task created", newTask });
};
