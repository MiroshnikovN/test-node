import mongoose from "mongoose";

const domainSchema = mongoose.Schema(
  {
    domainName: { type: String, required: true },
    ownerName: { type: String, required: true },
    ownerId: { type: String, required: true },
  },
  {
    minimize: false,
    timestamps: true,
  }
);

const Domain = mongoose.model("Domain", domainSchema);

export default Domain;
