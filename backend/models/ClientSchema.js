import mongoose from "mongoose";

import { UserModel } from "./UserSchema.js";

import fs from "fs";

/** save json file to a variable */
const rawCode = fs.readFileSync("./utils/currencies.json");
/** parse json file */
const code = JSON.parse(rawCode);

/** array to be used as enum */
const allCodes = [];
/** obtain each key in the object */
/** @newCode contains key of every object that will be used as enum values*/
for (const newCode in code) {
  allCodes.push(newCode);
}

const { Schema } = mongoose;

const ClientSchema = new Schema({
  clientName: {
    type: String,
    required: true,
  },
  clientType: {
    type: String,
    enum: ["organization", "person"],
    default: "person",
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: UserModel,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zip: {
    type: Number,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  website: {
    type: String,
  },
  vatNumber: {
    type: String,
  },
  gstNumber: {
    type: String,
  },
  clientGroup: {
    type: String,
  },
  currency: {
    type: String,
    enum: allCodes,
  },
  currencySymbol: {
    type: String,
  },
  label: {
    type: String,
  },
});

export const ClientModel = mongoose.model("ClientModel", ClientSchema);