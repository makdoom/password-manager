import mongoose from "mongoose";
import validator from "validator";

// Creating schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
  },
  email: {
    type: String,
    required: [true, "Please enter an email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
    minlength: [6, "Password lenght must be at least 6 charachter"],
  },
});

// Creating model
const User = mongoose.model("user", userSchema);

export default User;
