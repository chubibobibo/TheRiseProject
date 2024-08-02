import mongoose from "mongoose";

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
});
