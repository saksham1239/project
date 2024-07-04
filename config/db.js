import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose
  .connect(process.env.mongo_uri)
  .then(() => {
    console.log("connected to database!");
  })
  .catch((err) => {
    console.log(err);
  });
