import asyncHandler from "../middleweare/asyncHandler.js";
import cloudinary from "../utils/cloudinary.js";
import ErrorResponse from "../utils/errorResponse.js";

export const uploadRecipeImages = asyncHandler(async (req, res, next) => {
  const files = req.files;
  if (!files) {
    return next(new ErrorResponse("Please upload recipes images ", 400));
  }

  const promises = files.map((file) =>
    cloudinary.v2.uploader.upload(file.path, {
      folder: "Recipes/recipes",
    })
  );

  const data = (await Promise.all(promises)).map((obj) => obj.secure_url);

  res.status(200).json({ success: true, data });
});

export const uploadAvatar = asyncHandler(async (req, res, next) => {
  if (!req.file) {
    return next(new ErrorResponse("Please import an image ", 400));
  }
  const data = await cloudinary.v2.uploader.upload(req.file.path, {
    folder: "Recipes/avatars",
  });

  res.status(200).json({ success: true, data: data.secure_url });
});
