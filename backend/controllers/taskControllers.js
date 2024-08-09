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

export const getAllTasks = async (req, res) => {
  const foundTasks = await TaskModel.find({}).populate("comment");
  if (!foundTasks) {
    throw new ExpressError("No tasks found", 400);
  }
  res.status(200).json({ message: "Found tasks", foundTasks });
};

export const getSingleTask = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    throw new ExpressError("No task id found", 400);
  }

  /** populate the comment property */
  /** chaining populating author property referencing the UserModel */
  const foundSingleTask = await TaskModel.findById(id)
    .populate("comment")
    .populate({
      path: "comment",
      populate: {
        path: "author",
        model: "UserModel",
      },
    });
  if (!foundSingleTask) {
    throw new ExpressError("Cannot find that task");
  }
  res
    .status(200)
    .json({ message: `found ${foundSingleTask}`, foundSingleTask });
};
