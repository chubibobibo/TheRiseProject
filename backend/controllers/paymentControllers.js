import "express-async-errors";
import { ExpressError } from "../expressError/expressError.js";
import { PaymentModel } from "../models/PaymentSchema.js";
import { ClientModel } from "../models/ClientSchema.js";

/** adding payment */
export const addPayment = async (req, res) => {
  if (!req.body) {
    throw new ExpressError("No data received", 400);
  }
  const newPayment = await PaymentModel.create(req.body);
  if (!newPayment) {
    throw new ExpressError("Cannot create new payment", 400);
  }
  res.status(200).json({ message: "New payment created", newPayment });
};

//* get all payments
/** populating a nested object */
/**first populated data of invoice then inside the invoice property object, populated the project property (using ProjectModel) */
export const getAllPayments = async (req, res) => {
  const allPayments = await PaymentModel.find({})
    .populate("invoice")
    .populate({
      path: "invoice",
      populate: {
        path: "project",
        model: "ProjectModel",
      },
    });
  if (!allPayments) {
    throw new ExpressError("No payments found", 400);
  }
  res.status(200).json({ message: "payments found", allPayments });
};
