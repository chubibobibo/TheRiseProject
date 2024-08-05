import mongoose from "mongoose";

const { Schema } = mongoose;

const ProjectSchema = new Schema({
  projectName: {
    type: String,
    required: true,
  },
});

export const ProjectModel = new mongoose.model("ProjectModel", ProjectSchema);
