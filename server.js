import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/authRoutes.js";
import passwordRoutes from "./routes/passwordRoutes.js";

// Initialization
const app = express();
dotenv.config();

// Middelwares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(cookieParser());

// Database config
mongoose.connect(
  process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  () => console.log("DB connected")
);
const port = process.env.PORT || 5000;

// Routes
app.use(passwordRoutes);
app.use(authRoutes);

// // Deployment config
if (process.env.NODE_ENV === "production") {
  // set static folder
  app.use(express.static("client/build"));

  // app.get("*", (req, res) => {
  //   res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  // });
}

// PORT
app.listen(port, () => console.log(`Server running at ${port}`));
