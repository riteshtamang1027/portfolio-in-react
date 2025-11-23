import cloudinary from "../lib/cloudinaryConfig.js";
import { protfolio_profile } from "../models/profile_schema.js";

export const create_profile = async (req, res) => {
  try {
    const file = req.file;
    const cloudinaryResponse = await cloudinary.uploader.upload(file.path);

    const new_create_profile = await new protfolio_profile({
      ...req.body,
     profile_picture:cloudinaryResponse.secure_url,
    }).save();

    return res.status(201).json({
      message: "Profile created successfully.",
      data: new_create_profile,
    });
  } catch (error) { 
    console.log(error)
    return res.status(500).json("Internal server error.", error);
  }
  
};
