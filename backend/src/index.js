import express from "express";
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
import cors from 'cors';
import { app, server } from "./lib/socket.js";
import bodyParser from "body-parser";


import path from "path";

import { connectDB } from "./lib/db.js";
import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js'
import fileRoutes from "./routes/file.route.js";

dotenv.config();
// app.use(express.json());
app.use(cookieParser());

app.use(
   cors({
   origin:"http://localhost:3000",
   credentials: true,
}));

app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));

const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();

app.use("/uploads", express.static("uploads"));
app.use("/files", fileRoutes);

app.use("/auth", authRoutes)
app.use("/messages", messageRoutes)

if (process.env.MODE_ENV=== "production") {
   app.use(express.static(path.join(__dirname, "../frontend/build")));

//    app.get("*", (req, res) => {
//    if (!req.path.startsWith("/")) {
//       res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
//     }
// // res.sendFile(path. join(_dirname, " .. /frontend/build/index.html") );
//    })
   app.get("/",(req,res)=>{
   res.json("hello surekha")
})
}

// if (process.env.NODE_ENV === "production") {
//   const frontendPath = path.join(__dirname, "../frontend/dist");

//   app.use(express.static(frontendPath));

//   app.get("*", (req, res) => {
//     res.sendFile(path.join(frontendPath, "index.html"));
//   });
// }

server.listen(PORT, ()=> {
    console.log("Server is running on PORT:" + PORT);
    connectDB(process.env.MONGODB_URI)  
 })

 
   
