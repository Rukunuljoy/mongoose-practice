import mongoose from "mongoose";
import app from "./app";
const port: number = 5000;

//database connection
async function contact() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/practice-mongoose");
    console.log("database connection successful");
    
    app.listen(port, () => {
      console.log(`the app is listening ${port}`);
    });
  } catch (error) {
    console.log("database connection error", error);
  }
}
contact();