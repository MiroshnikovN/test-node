import asyncHandler from "express-async-handler";
import Domain from "../../models/domainModel.js";

export const getDomainByOwner = asyncHandler(async (req, res) => {
  const { ownerId } = req.body;

  const domain = await Domain.find({ ownerId: ownerId });

  res.json(domain);
});
