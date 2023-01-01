import bcrypt from "bcryptjs";

const users = [
  {
    _id: "6202e2f438c75018a19ae6bf",
    photo:
      "https://res.cloudinary.com/dmalpxwu4/image/upload/v1644680061/Recipes/avatars/tlbc4gx33cejs1dlddwa.jpg",
    isEmailConfirmed: false,
    twoFactorEnable: false,
    firstName: "Sarah",
    lastName: "Johnson",
    email: "sarah@example.com",
    password: bcrypt.hashSync("123456", 10),
    averageRating: null,
  },
  {
    _id: "6207d95b0c5f4595c2c44394",
    photo:
      "https://res.cloudinary.com/dmalpxwu4/image/upload/v1644684518/Recipes/avatars/z6brjuwtvbexhevngsdl.jpg",
    isEmailConfirmed: false,
    twoFactorEnable: false,
    firstName: "Jane",
    lastName: "Doe",
    email: "jane@example.com",
    password: bcrypt.hashSync("123456", 10),
    averageRating: null,
  },
  {
    _id: "6207dda430d0a1963d1db92a",
    photo: "/images/user.webp",
    isEmailConfirmed: false,
    twoFactorEnable: false,
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    password: bcrypt.hashSync("123456", 10),
    averageRating: null,
  },
  {
    _id: "6207e05b30d0a1963d1db930",
    photo: "/images/user.webp",
    isEmailConfirmed: false,
    twoFactorEnable: false,
    firstName: "Mads",
    lastName: "Mickelsen",
    email: "mads@example.com",
    password: bcrypt.hashSync("123456", 10),
    averageRating: null,
  },
];

export default users;
