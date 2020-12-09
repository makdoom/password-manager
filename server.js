import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";

// Initialization
const app = express();
dotenv.config();

// Middelwares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

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

// PORT
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running at ${port}`));
