import express from "express";
import { addClient, getAllClients } from "../controllers/clientControllers.js";

/**input validations */
import { addClientValidation } from "../middleware/validationMiddleware.js";

const router = express.Router();

router.get("/getAllClients", getAllClients);
router.post("/addClient", addClientValidation, addClient);

export default router;
