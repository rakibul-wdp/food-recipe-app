import jwt from "jsonwebtoken";
import User from "../models/User.js";
import ErrorResponse from "../utils/errorResponse.js";
import asyncHandler from "./asyncHandler.js";

const requireAuth = asyncHandler(async (req, res, next) => {
  let token;

  if (req.cookies.token) {
    token = req.cookies.token;
  } else if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  if (!token) {
    return next(new ErrorResponse("Not authorized to access this route", 401));
  }
  // Verify
  try {
    const decoded = jwt.verify(token, "" + process.env.JWT_SECRET);
    req.user = await User.findOne({ _id: decoded.id });
    return next();
  } catch (error) {
    return next(new ErrorResponse("Not authorized to access this route", 401));
  }
});

export default requireAuth;
