import mongoose from "mongoose";

const portfolioSchema = new mongoose.Schema({
  user_name: { type: String, required: true },
  profile_picture: {
    type: String,
    require: true,
  },
  skills: { type: [String], required: true },
  description: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        const count = value.trim().split(/\s+/).length;
        return count >= 100 && count <= 400;
      },
      message: "Description must be 100–400 words",
    },
  },
});

export const protfolio_profile = mongoose.model("portfolio", portfolioSchema);
