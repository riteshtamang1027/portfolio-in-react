import express from "express";
import { create_profile } from "../controllers/profile_controller.js";
import multer from "multer";
const upload = multer({ dest: "uploads/" });

const router = express.Router(); 

router.post("/", upload.single("profile_picture"), create_profile);
// router.get("/",something)
// router.get("/:id",something)
// router.patch("/:id",something)
// router.delete("/:id",something)

export default router;
