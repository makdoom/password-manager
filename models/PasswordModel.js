import mongoose from "mongoose";

const passwordRow = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please enter title"],
  },
  username: {
    type: String,
    required: [true, "Please enter username"],
  },
  password: {
    type: String,
    required: [true, "Please enter password"],
  },
});

// Creating schema
const passwordSchema = new mongoose.Schema({
  userId: {
    type: String,
  },
  passwords: [passwordRow],
});

// Creating model
const Password = mongoose.model("password", passwordSchema);

export default Password;
