import mongoose from "mongoose";
import { roles } from "../utils/userRoles.js";
import passportLocalMongoose from "passport-local-mongoose";

const { Schema } = mongoose;

/** Password will be implemented by passportJs */

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },

  firstName: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  roles: {
    type: String,
    enum: Object.values(roles) /** returns the values of objects in an array */,
  },

  avatarUrl: {
    type: String,
  },

  avatarPublicId: {
    type: String,
  },
});

/**implementing passport-local-mongoose to allow different methods to authenticate user */
/**allows creation of secure passwords automatically*/
/** @errorMessages customized error messages when logging in. This needs to be handled in login route*/
UserSchema.plugin(passportLocalMongoose, {
  errorMessages: {
    MissingUsernameError: "No username was given",
    MissingPasswordError: "No password was given",
    IncorrectPasswordError: "Username or password is incorrect",
    IncorrectUsernameError: "Username or password is incorrect",
    UserExistsError: "A user with the given username is already registered",
  },
});

export const UserModel = mongoose.model("UserModel", UserSchema);
