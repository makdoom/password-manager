import jwt from "jsonwebtoken";

import User from "../models/UserModel.js";

// Handel errors
const handelErrors = (err) => {
  // Error object
  let errors = { name: "", email: "", password: "" };

  // Duplicate error code
  if (err.code === 11000) {
    errors.email = "Email is already registered";
    return errors;
  }

  // validation error
  if (err.message.includes("user validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};

// Create JWT token
const maxAge = 2 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: maxAge });
};

// User signup
export const signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Creating new user
    const newUser = await User.create({ name, email, password });

    // Assigning token
    const token = createToken(newUser._id);
    // TODO: to secure cookie
    res.cookie("jwt", token, {
      httpOnly: true,
      // secure: true,
      maxAge: maxAge * 1000,
    });
    res.status(201).json({ name: newUser.name });
  } catch (error) {
    // console.log(error.message);
    const errors = handelErrors(error);
    console.log(errors);
    res.status(401).json({ errors });
  }
  // res.status(200).json({ name, email, password });
};

// User Login
export const login = (req, res) => {
  res.send("Login User");
};
