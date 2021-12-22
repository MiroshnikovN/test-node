import asyncHandler from "express-async-handler";
import Domain from "../../models/domainModel.js";

export const updateDomain = asyncHandler(async (req, res) => {
  const { domainName, ownerName, ownerId, domainId } = req.body;

  const existinDomain = await Domain.findOne({ domainName: domainName });

  if (existinDomain) {
    res.status(409);
    throw new Error("Такой domainName уже используется!");
  }

  const existinOwnerId = await Domain.findOne({ ownerId: ownerId });

  if (existinOwnerId) {
    res.status(409);
    throw new Error("Этот id занят!");
  }

  const domain = await Domain.findById(domainId);

  if (!domain) {
    res.status(404);
    throw new Error("Данный домен не найден!");
  }

  domain.domainName = domainName;
  domain.ownerName = ownerName;
  domain.ownerId = ownerId;

  const updatedDomain = await domain.save();

  res.json(updatedDomain);
});
