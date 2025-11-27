import { Server } from "socket.io";
import http from "http";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

// CORS for frontend
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
}));

// Body size limits (fixes 413 Payload Too Large)
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));

// Basic JSON parser (required for axios POST)
app.use(express.json());

const server = http.createServer(app);

export function getReceiverSocketId(userId) {
    return userSocketMap[userId];
}

const io = new Server(server, {
    cors: {
        origin: ["http://localhost:3000"],
        credentials: true
    },
});

// Online users map
const userSocketMap = {}; // {userId: socketId}

io.use((socket, next) => {
  const userId = socket.handshake.query.userId;
  if (!userId) return next(new Error("No userId"));
  next();
});

io.on("connection", (socket) => {
    console.log("A user connected", socket.id);

    const userId = socket.handshake.query.userId;
    if (userId) userSocketMap[userId] = socket.id;

    io.emit("getOnlineUsers", Object.keys(userSocketMap));

    socket.on("disconnect", () => {
        console.log("A user disconnected", socket.id);
        delete userSocketMap[userId];
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    });
});

export { io, app, server };
