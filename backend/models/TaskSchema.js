import mongoose from "mongoose";
import { CommentModel } from "./Comments.js";

import { relatedTask } from "../utils/relatedTask.js";
console.log(Object.values(relatedTask));

const { Schema } = mongoose;

const TaskSchema = new Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  relatedTo: {
    type: String,
    enum: Object.values(relatedTask),
    required: true,
  },

  //   project: {
  //     type: String,
  //     enum:
  //   },

  points: {
    type: Number,
    enum: [1, 2, 3, 4, 5],
  },

  milestone: {
    type: String,
  },

  assignTo: {
    type: String,
  },

  collaborators: {
    type: String,
  },

  status: {
    type: String,
    enum: ["to do", "in progress", "review", "done"],
  },

  priority: {
    type: String,
    enum: ["minor", "major", "critical", "blocker"],
  },

  labels: {
    type: String,
    enum: ["feedback", "bug", "enhancement", "design"],
  },

  startDate: {
    type: Date,
    required: true,
  },

  deadline: {
    type: Date,
    required: true,
  },

  recurring: {
    type: String,
    enum: ["true", "false"],
    // type: Boolean,
  },

  comment: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CommentModel",
    },
  ],
});

export const TaskModel = new mongoose.model("TaskModel", TaskSchema);
