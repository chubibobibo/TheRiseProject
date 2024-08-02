import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";

/** imports for creating session and using mongo store */
import session from "express-session";
import MongoStore from "connect-mongo";
/** imports for configuring passport */
import { UserModel } from "./models/UserSchema.js";
import passport from "passport";

/** route imports */
import userRoutes from "./routes/authRoutes.js";
import clientRoutes from "./routes/clientRoutes.js";

app.use(express.json()); /** parsing json data */
app.use(cors());
app.use(bodyParser.json());

/** Connecting to database */
// getting-started.js
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(process.env.MONGO_URL);
}

/** setup mongo store to store session data
 * @touchAfter updates the session 1 time in 24hrs except when there are changes in the session
 */
const store = new MongoStore({
  mongoUrl: process.env.MONGO_URL,
  secret: process.env.STORE_SECRET,
  // touchAfter: 24 * 60 * 60,
});

/** listens for session errors */
store.on("error", function (e) {
  console.log("session error");
});

/** creating configuration for the session using the sessionStore created */
// app.set("trust proxy", 1);
const sessionConfig = {
  store,
  name: process.env.SESSION_NAME,
  secret: process.env.SESSION_SECRET,
  saveUninitialized: true,
  resave: false,
  cookie: {
    expires: Date.now() * 1000 * 60 * 60 * 24 * 7 /** 1 week expiration */,
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true /** prevents access of cookies client side */,
  },
};

/** Instantiate sessions using the created config */
app.use(session(sessionConfig));

/**initialize passport for incoming requests. allows authentication strategies to be applied */
app.use(passport.initialize());
/** allows persistent session */
app.use(passport.session());

/** verifying if req.user that contains user data (from session) is created for every request*/
// app.use((req, res, next) => {
//   console.log(req.user);
//   console.log(req.session);
//   next();
// });

/** specify the strategy to be used in passport */
/** @UserModel passport-local-mongoose strategy was implemented*/
passport.use(UserModel.createStrategy());

/**store user data in session store */
passport.serializeUser(UserModel.serializeUser());
/** unstore userdata in session */
passport.deserializeUser(UserModel.deserializeUser());

/** routes */
app.use("/api/auth/", userRoutes);
app.use("/api/clients/", clientRoutes);

/** error handling */
/** handling errors for page not found */
app.use("*", (req, res) => {
  res.status(404).json({ message: "Page not found" });
});

/** Handling express errors for every request */
app.use((err, req, res, next) => {
  const status = err.status || 400;
  const message = err.message || "Something went wrong";
  res.status(status).json({ message: message });
});

app.listen(process.env.PORT, () => {
  console.log(`SERVING PORT ${process.env.PORT}`);
});
