import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

// Load models
import Recipe from "./models/Recipe.js";
import Review from "./models/Review.js";
import User from "./models/User.js";

// Connect to DB
mongoose.connect(process.env.MONGO_URI);

// Read data
import recipes from "./data/recipes.js";
import reviews from "./data/reviews.js";
import users from "./data/users.js";

// Import into DB
async function importData() {
  try {
    await User.insertMany(users);
    await Recipe.insertMany(recipes);
    await Review.insertMany(reviews);

    console.log("Data imported");
    process.exit();
  } catch (err) {
    console.error(err);
  }
}

// Delete data
async function deleteData() {
  try {
    await User.deleteMany();
    await Recipe.deleteMany();
    await Review.deleteMany();

    console.log("Data destroyed");
    process.exit();
  } catch (err) {
    console.error(err);
  }
}

if (process.argv[2] === "-i") {
  importData();
} else if (process.argv[2] === "-d") {
  deleteData();
}
