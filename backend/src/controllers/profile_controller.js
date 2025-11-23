import cloudinary from "../lib/cloudinaryConfig.js";
import { protfolio_profile } from "../models/profile_schema.js";

// CRUD OPERATIONS

// Create user profile
export const create_profile = async (req, res) => {
  try {
    const file = req.file;
    const cloudinaryResponse = await cloudinary.uploader.upload(file.path);

    const new_create_profile = await new protfolio_profile({
      ...req.body,
      profile_picture: cloudinaryResponse.secure_url,
    }).save();

    return res.status(201).json({
      message: "Profile created successfully.",
      data: new_create_profile,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal server error.", error);
  }
};

// get all user data
export const getAllUser = async (req, res) => {
  try {
    const getalluser = await protfolio_profile.find();

    return res.status(200).json({
      message: "User data fetched successfully.",
      data: getalluser,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

// update section
export const updateuserinfo = async (req, res) => {
  try {
    let updateusr = { ...req.body };

    // image or file update section
    if (req.file) {
      const cloudinaryResponse = await cloudinary.uploader.upload(
        req.file.path
      );
      updateusr.profile_picture = cloudinaryResponse.secure_url;
    }

    // update profile
    const userdataupdate = await protfolio_profile.findByIdAndUpdate(
      req.params.id,
      updateusr,
      { new: true }
    );

    // if the user is not found
    if (!userdataupdate) {
      return res.status(404).json({ message: "user data not found" });
    }

    // return all updated data
    return res.status(200).json({
      message: "user data updated successfully",
      data: userdataupdate,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

// delete section
export const delete_userprofile = async (req, res) => {
  try {
    const deleteProfile = await protfolio_profile.findByIdAndDelete(
      req.params.id
    );

    if (!deleteProfile) {
      return res.status(404).json({
        message: "user data not found",
      });
    }

    return res.status(200).json({
      message: "Data deleted successfully.",
      data: deleteProfile,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal server error.", error);
  }
};
