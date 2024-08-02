import "express-async-errors";
import { ExpressError } from "../expressError/expressError.js";
import { ClientModel } from "../models/ClientSchema.js";

/** adding client */
export const addClient = async (req, res) => {
  if (!req.body) {
    throw new ExpressError("No data received", 400);
  }
  const newClient = await ClientModel.create(req.body);
  if (!newClient) {
    throw new ExpressError("Problem creating a enw client", 400);
  }
  res.status(200).json({ message: "new client created" });
};

/** get all the clients */
export const getAllClients = async (req, res) => {
  const allClients = await ClientModel.find({});
  if (!allClients) {
    throw new ExpressError("Cannot find clients");
  }
  if (allClients.length === 0) {
    console.log("Clients are empty");
  }
  res.status(200).json({ message: "Found clients", allClients });
};
