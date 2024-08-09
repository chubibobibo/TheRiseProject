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
router.post("/login", loginValidation, apiLimiter, (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({
        success: false,
        message: info.message || "Invalid username or password.",
      });
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err); // Handle any errors during login
      }
      return login(req, res); // Proceed to your login controller if authentication is successful
    });
  })(req, res, next);
});

export default router;
