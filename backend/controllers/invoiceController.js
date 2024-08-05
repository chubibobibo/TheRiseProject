import "express-async-errors";
import { ExpressError } from "../expressError/expressError.js";
import { InvoiceModel } from "../models/InvoiceSchema.js";

//adding invoices
export const addInvoice = async (req, res) => {
  if (!req.body) {
    throw new ExpressError("No data received");
  }
  const newInvoice = await InvoiceModel.create(req.body);
  if (!newInvoice) {
    throw new ExpressError("Cannot create new invoice");
  }
  res.status(200).json({ message: "New invoice created" });
};
