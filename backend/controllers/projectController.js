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

/** get all open projects */
export const getAllOpenProj = async (req, res) => {
  const foundProjects = await ProjectModel.find({ projectStatus: "open" });
  if (!foundProjects) {
    throw new ExpressError("No projects found", 400);
  }
  res.status(200).json({ message: "found open projects", foundProjects });
};
