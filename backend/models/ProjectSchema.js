import mongoose from "mongoose";
import { ClientModel } from "./ClientSchema.js";

const { Schema } = mongoose;

const ProjectSchema = new Schema({
  projectName: {
    type: String,
    required: true,
  },

  projectStatus: {
    type: String,
    enum: ["open", "completed", "hold", "canceled"],
  },

  owner: {
    type: Schema.Types.ObjectId,
    ref: "ClientModel",
  },
});

export const ProjectModel = new mongoose.model("ProjectModel", ProjectSchema);
