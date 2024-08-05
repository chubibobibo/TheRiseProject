import mongoose from "mongoose";
import { InvoiceModel } from "./InvoiceSchema.js";

const { Schema } = mongoose;

const PaymentSchema = new Schema({
  invoice: {
    type: Schema.Types.ObjectId,
    ref: InvoiceModel,
  },

  paymentMethod: {
    type: String,
    enum: ["cash"],
  },

  paymentDate: {
    type: Date,
    required: true,
  },

  amount: {
    type: Number,
    required: true,
  },

  note: {
    type: String,
  },
});

export const PaymentModel = new mongoose.model("PaymentModel", PaymentSchema);
