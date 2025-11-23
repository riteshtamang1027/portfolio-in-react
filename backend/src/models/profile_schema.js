import mongoose from "mongoose";

const portfolioSchema = new mongoose.Schema({
  user_name: { type: String, required: true },
  profile_picture: {
    type: String,
    require: true,
  },
  skills: { type: String, required: true },
});

export const protfolio_profile = mongoose.model("portfolio", portfolioSchema);
