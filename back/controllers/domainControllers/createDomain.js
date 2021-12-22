import asyncHandler from "express-async-handler";
import Domain from "../../models/domainModel.js";

export const createDomain = asyncHandler(async (req, res) => {
  const { domainName, ownerName, ownerId } = req.body;

  if (!domainName || !ownerName) {
    res.status(400);
    throw new Error("domainName и ownerName обязательны для заполнения!");
  }

  const existinDomain = await Domain.findOne({ domainName: domainName });

  if (existinDomain) {
    res.status(409);
    throw new Error(`domainName ${domainName} уже используется!`);
  }

  const existinOwnerId = await Domain.findOne({ ownerId: ownerId });

  if (existinOwnerId) {
    res.status(409);
    throw new Error("Этот id занят!");
  }

  const domain = await Domain.create({
    domainName,
    ownerName,
    ownerId,
  });

  res.json(domain);
});
