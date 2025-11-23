import express from "express";
import { create_profile, delete_userprofile, getAllUser, updateuserinfo } from "../controllers/profile_controller.js";
import multer from "multer";
const upload = multer({ dest: "uploads/" });

const router = express.Router(); 

router.post("/", upload.single("profile_picture"), create_profile);
router.get("/",getAllUser)
// router.get("/:id",something)
router.patch("/:id",upload.single("profile_picture"),updateuserinfo)
router.delete("/:id",delete_userprofile)

export default router;
