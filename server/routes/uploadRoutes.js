import express from "express";
import {
  uploadAvatar,
  uploadRecipeImages
} from "../controllers/uploadController.js";
import uploadMiddleware from "../middleweare/multerUpload.js";
import requireAuth from "../middleweare/requireAuth.js";
const router = express.Router();

router.post(
  "/recipe_images",
  uploadMiddleware.array("recipe_images", 12),
  uploadRecipeImages
);

router.post(
  "/set_avatar",
  [requireAuth, uploadMiddleware.single("avatar")],
  uploadAvatar
);
export default router;
