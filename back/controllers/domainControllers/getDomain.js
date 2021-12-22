import asyncHandler from "express-async-handler";
import Domain from "../../models/domainModel.js";

export const getDomain = asyncHandler(async (req, res) => {
  const { page = 1, limit = 10 } = req.query;

  const domain = await Domain.find({})
    .limit(limit * 1)
    .skip((page - 1) * limit);

  res.json(domain);
});
