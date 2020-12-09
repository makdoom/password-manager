import User from "../models/UserModel.js";

// Handel errors
const handelErrors = (err) => {
  // Error object
  let error = { name: "", email: "", password: "" };

  // validation error
  if (err.message.includes("user validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      error[properties.path] = properties.message;
    });
  }
  return error;
};

// User signup
export const signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Creating new user
    const newUser = await User.create({ name, email, password });
    res.status(201).json({ newUser });
  } catch (error) {
    console.log(error.message);
    const errors = handelErrors(error);
    res.status(400).json({ errors });
  }
};

// User Login
export const login = (req, res) => {
  res.send("Login User");
};
