import { body, validationResult } from "express-validator";
import { UserModel } from "../models/UserSchema.js";
import { ExpressError } from "../expressError/expressError.js";

//create a function that will handle the error
//This function will accept an array (validateValues) of values to be validated.
//then this function will return the array we passed as an argument and an error response
const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req); //this returns all available errors based on the validation provided when checking the incoming request.
      //check if the errors array is not empty meaning there errors.
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((allErrors) => allErrors.msg); //turns the errors from the validationResult into array then mapped it to access the msg key for every item in the original array, then populate the created array with that.
        throw new ExpressError(errorMessages); //use the custom error that we created and pass the errorMessages that we mapped instead of a string.
      }
      next();
    },
  ];
};

export const registerValidation = withValidationErrors([
  body("username")
    .notEmpty()
    .withMessage("user name cannot be empty")
    .isLength({ max: 30 })
    .withMessage("Username cannot exceed 30 characters"),
  body("firstName")
    .notEmpty()
    .withMessage("First name cannot be empty")
    .isLength({ max: 30 })
    .withMessage("First name cannot exceed 30 characters"),
  body("lastName")
    .notEmpty()
    .withMessage("Last name cannot be empty")
    .isLength({ max: 30 })
    .withMessage("Last name cannot exceed 30 characters"),
  body("email")
    .notEmpty()
    .withMessage("Email cannot be empty")
    .isEmail()
    .withMessage("Must be a valid email")
    .custom(async (email) => {
      const foundEmail = await UserModel.findOne({ email: email });
      if (foundEmail) {
        throw new ExpressError("Email already in use", 400);
      }
    }),
  body("password")
    .notEmpty()
    .withMessage("Password cannot be empty")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters"),
]);

export const loginValidation = withValidationErrors([
  body("username").notEmpty().withMessage("User name cannot be empty"),
  body("password")
    .notEmpty()
    .withMessage("Password cannot be empty")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters"),
]);

export const addClientValidation = withValidationErrors([
  body("clientName").notEmpty().withMessage("client name cannot be empty"),
  body("clientType").notEmpty().withMessage("client type cannot be empty"),
  body("address").notEmpty().withMessage("address  cannot be empty"),
  body("city").notEmpty().withMessage("city cannot be empty"),
  body("state").notEmpty().withMessage("state cannot be empty"),
  body("zip").notEmpty().withMessage("zip cannot be empty"),
  body("country").notEmpty().withMessage("country cannot be empty"),
  body("phone").notEmpty().withMessage("phone cannot be empty"),
]);
