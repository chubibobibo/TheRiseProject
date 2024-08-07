import mongoose from "mongoose";

const { Schema } = mongoose;

const SalesSchema = new Schema({
  invoiceId: {
    type: String,
    required: true,
  },

  billDate: {
    type: Date,
    required: true,
  },

  dueDate: {
    type: Date,
    required: true,
  },

  totalInvoiced: {
    type: Number,
  },

  paymentReceived: {
    type: Number,
  },

  dueStatus: {
    type: String,
    enum: ["partially-paid", "overdue", "paid"],
  },
});

export const SalesModel = new mongoose.model("SalesModel", SalesSchema);
