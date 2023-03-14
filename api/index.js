import express, { response } from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"

import authRoute from "./roots/auth.js"
import usersRoute from "./roots/users.js"
import roomsRoute from "./roots/rooms.js"


const app = express()
dotenv.config()

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongoDB.");
      } catch (error) {
        throw error;
      }
};




mongoose.connection.on("disconnected", ()=>{
    console.log("mongoDB disconnected!")
})


//middlewares

app.use(express.json())
app.use(cors())
app.use("/api/auth",authRoute);
app.use("/api/users",usersRoute);
app.use("/api/rooms",roomsRoute);

app.use((err,req,res,next)=>{
  const errorStatus = err.status || 500
  const errorMessage = err.message || "Something Went Wrong"
  return res.status(errorStatus).json({
    success:false,
    status:errorStatus,
    message:errorMessage,
    stack:err.stack,
  })
})



app.listen(8800,()=>{
  connectDB();
  console.log("Connected to backend.")
})
