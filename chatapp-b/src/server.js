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
app.use("/api/files", fileRoutes);

app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)

if (process.env.NODE_ENV === "production") {
   app.use(express.static(path.join(__dirname, "../chatapp-f/dist")));

   app.get("*", (req, res) => {
res.sendFile(path. join(_dirname, " .. /chatapp-f", "dist", "index.html") );
   })
}

server.listen(PORT, ()=> {
    console.log("Server is running on PORT:" + PORT);
    connectDB(process.env.MONGODB_URI)
 })

 
   