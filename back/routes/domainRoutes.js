import express from "express";
import { createDomain } from "../controllers/domainControllers/createDomain.js";
import { getDomain } from "../controllers/domainControllers/getDomain.js";
import { getDomainByOwner } from "../controllers/domainControllers/getDomainByOwner.js";
import { updateDomain } from "../controllers/domainControllers/updateDomain.js";

const router = express.Router();

router.route("/").post(createDomain).get(getDomain);

router.route("/update/:id").put(updateDomain);

router.route("/byOwner/:id").get(getDomainByOwner);

export default router;
