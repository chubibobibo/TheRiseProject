import "express-async-errors";
import { UserModel } from "../models/UserSchema.js";
import { ExpressError } from "../expressError/expressError.js";

export const register = async (req, res) => {
  if (!req.body) {
    throw new ExpressError("No data received", 400);
  }
  /** should await countDocuments */
  /** @password is still being sent through by req.body */
  /** @password set it up manually using .setPassword */
  const isUserAdmin = (await UserModel.countDocuments()) === 0;
  const { username, firstName, lastName, email, roles, password } = req.body;
  req.body.roles = isUserAdmin ? "admin" : "user";
  const newUser = await UserModel.create({
    username: username,
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
    roles: req.body.roles,
  });
  await newUser.setPassword(password);
  await newUser.save();
  if (!newUser) {
    throw new ExpressError("Problem registering a user", 400);
  }
  res.status(200).json({ message: "Successfully registered a user", newUser });
};

/** @login search the user in the database using the username provided in the req.body */
/** authentication will mainly happen in the routes of login using passportJs methods */
export const login = async (req, res) => {
  const { username } = req.body;
  if (!req.body) {
    throw new ExpressError("No data received", 400);
  }
  const foundUser = await UserModel.findOne({ username: username });
  if (!foundUser) {
    throw new ExpressError("User does not exist", 400);
  }
  res.status(200).json({ message: "User found", foundUser });
};

/**currentLoggedUser */
export const currentLoggedUser = async (req, res) => {
  const foundUser = await UserModel.findOne(req.user._id);
  if (!foundUser) {
    throw new ExpressError("No user logged in", 400);
  }
  res.status(200).json({ message: "logged user", foundUser });
};
