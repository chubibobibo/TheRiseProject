import express from "express";
const router = express.Router();

import { addInvoice } from "../controllers/invoiceController.js";

router.post("/addInvoice", addInvoice);

export default router;
