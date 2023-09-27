import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";
import subscriptionRoutes from "./routes/subscriptions.js";
import rentalRoutes from "./routes/rentals.js";
import cookieParser from "cookie-parser";
const app = express();
dotenv.config();

const connect = () => {
    mongoose.connect(process.env.Mongo)
    .then(()=>{
        console.log("MongoDB connected!")
    })
    .catch((err) => {
        throw err
    })
}

// middlewares
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", true);
    next();
  });
  app.use(
    cors({
      origin: "http://localhost:3000",
    })
  );
app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }));


app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/subscriptions", subscriptionRoutes);
app.use("/api/temporary-rentals", rentalRoutes);


app.listen(5000, ()=>{
    console.log("App has started at 5000");
    connect()
})