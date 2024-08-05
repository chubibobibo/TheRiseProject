import express from "express";
import {
  addPayment,
  getAllPayments,
} from "../controllers/paymentControllers.js";
const router = express.Router();

router.get("/allPayments", getAllPayments);
router.post("/addPayment", addPayment);

export default router;
