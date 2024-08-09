import express from "express";
import { addComment } from "../controllers/commentsController.js";
const router = express.Router();

router.post("/addComment/:id", addComment);

export default router;
