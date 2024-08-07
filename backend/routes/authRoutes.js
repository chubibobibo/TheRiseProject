import express from "express";
import passport from "passport";
import { rateLimit } from "express-rate-limit";

const router = express.Router();

import {
  register,
  login,
  currentLoggedUser,
} from "../controllers/authController.js";

/** input validations */
import {
  registerValidation,
  loginValidation,
} from "../middleware/validationMiddleware.js";

/** limiting API calls to routes */
const apiLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  limit: 3, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
  standardHeaders: "draft-7", // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
  // store: ... , // Redis, Memcached, etc. See below.
  message: "login attempt exceeded 3 tries. Try again after 15 minutes",
});

router.get("/currentLoggedUser", currentLoggedUser);
router.post("/register", registerValidation, register);
router.post(
  "/login",
  loginValidation,
  apiLimiter,
  passport.authenticate("local", {
    failureMessage: true,
  }),
  login
);

export default router;
