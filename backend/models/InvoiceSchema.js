import mongoose from "mongoose";
import { ClientModel } from "./ClientSchema.js";
import { ProjectModel } from "./ProjectSchema.js";
const { Schema } = mongoose;

const InvoiceSchema = new Schema({
  billDate: {
    type: Date,
    required: true,
  },

  dueDate: {
    type: Date,
    required: true,
  },

  //   client: {
  //     type: Schema.Types.ObjectId,
  //     ref: ClientModel,
  //   },

  project: {
    type: Schema.Types.ObjectId,
    ref: ProjectModel,
  },

  tax: {
    type: Number,
    required: true,
  },

  secondTax: {
    type: Number,
    required: true,
  },

  tds: {
    type: Number,
  },

  recurring: {
    type: Boolean,
  },

  note: {
    type: String,
  },

  label: {
    type: String,
  },
});

export const InvoiceModel = new mongoose.model("InvoiceModel", InvoiceSchema);
