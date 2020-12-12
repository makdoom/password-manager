import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";

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

// static method
userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  // User is there or not
  if (user) {
    const result = await bcrypt.compare(password, user.password);
    if (result) return user;

    throw Error("Incorrect password");
  }
  throw Error("Email is not registered");
};

// Encrypting the password
userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Creating model
const User = mongoose.model("user", userSchema);

export default User;
