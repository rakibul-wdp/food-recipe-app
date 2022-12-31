import express from "express";
import {
  confirmEmail, deleteAccount, forgotPassword,
  getCurrentUser, logout, resetPassword, sendConfirmationEmail, signIn,
  signUp, updateDetails,
  updatePassword
} from "../controllers/authController.js";
import requireAuth from "../middleware/requireAuth.js";

// Include recipe router
import recipeRouter from "./recipeRoutes.js";
import reviewRouter from "./reviewRoutes.js";

const router = express.Router();

// Re-route to recipes
router.use("/:userId/recipes", recipeRouter);
router.use("/:userId/reviews", reviewRouter);

router.post("/signup", signUp);
router.post("/signin", signIn);
router.get("/me", requireAuth, getCurrentUser);
router.get("/logout", requireAuth, logout);
router.put("/updatedetails", requireAuth, updateDetails);
router.put("/updatepassword", requireAuth, updatePassword);
router.post("/forgotpassword", forgotPassword);
router.put("/resetpassword/:resettoken", resetPassword);
router.post("/sendconfirmationemail/", requireAuth, sendConfirmationEmail);
router.put("/confirmemail/:confirmationtoken", confirmEmail);
router.delete("/deleteaccount", requireAuth, deleteAccount);

export default router;
