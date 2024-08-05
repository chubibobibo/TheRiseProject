import "express-async-errors";
import { ExpressError } from "../expressError/expressError.js";
import { ProjectModel } from "../models/ProjectSchema.js";

export const addProject = async (req, res) => {
  if (!req.body) {
    throw new ExpressError("No data received", 400);
  }
  const newProject = await ProjectModel.create(req.body);
  res.status(200).json({ message: "New project created", newProject });
};
