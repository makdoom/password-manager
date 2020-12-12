import jwt from "jsonwebtoken";

import User from "../models/UserModel.js";

// Handel errors
const handelErrors = (err) => {
  // Error object
  let errors = { name: "", email: "", password: "" };

  // Email error
  if (err.message === "Email is not registered") {
    errors.email = "Email is not registered";
  }

  // Password error
  if (err.message === "Incorrect password") {
    errors.password = "Password do not match";
  }

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
    const errors = handelErrors(error);
    res.status(401).json({ errors });
  }
};

// User Login
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    // Assigning token
    const token = createToken(user._id);
    // TODO: to secure cookie
    res.cookie("jwt", token, {
      httpOnly: true,
      // secure: true,
      maxAge: maxAge * 1000,
    });
    res.status(200).json({ name: user.name });
  } catch (error) {
    const errors = handelErrors(error);
    res.status(401).json({ errors });
  }
};
