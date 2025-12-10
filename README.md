# 🌊 TalkTide

### *A smooth, continuous flow of conversation.*

A fully functional **real-time chat application** built using **React**,
**Express**, **MongoDB**, and **Socket.io**, with secure authentication,
file uploads, theming, and live user status tracking.

------------------------------------------------------------------------

## 📺 Project Demo Video

[![Chatty Demo Video](https://img.youtube.com/vi/7tfIcBrzgaQ/0.jpg)](https://youtu.be/7tfIcBrzgaQ)

-----------------------------------------------------------------------------

# 🏷️ Tech Stack Badges

![React](https://img.shields.io/badge/Frontend-React-blue)
![NodeJS](https://img.shields.io/badge/Backend-Node.js-green)
![Express](https://img.shields.io/badge/Framework-Express-black)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-darkgreen)
![Socket.io](https://img.shields.io/badge/Realtime-Socket.io-grey)
![Zustand](https://img.shields.io/badge/State-Zustand-yellow)
![Bootstrap](https://img.shields.io/badge/UI-Bootstrap-blueviolet)
![JWT](https://img.shields.io/badge/Auth-JWT-orange)

------------------------------------------------------------------------

# 📌 Features

### 🔐 Authentication

-   Email + Password login/signup\
-   JWT stored in **HTTP-only cookies**
-   Auto-login using `checkAuth()`

### 💬 Real-Time Chat

-   Live messaging using **Socket.io**
-   Online users tracking
-   Chat list automatically updates

### 🎨 Theme System

-   Light / Dark mode\
-   Theme stored in Zustand\
-   Auto-applies using `data-bs-theme`

### 📁 Media & File Uploads

-   Upload images/files\
-   Served from `/uploads` folder

### 🛠️ Backend Features

-   Express REST API\
-   MongoDB connection\
-   Middleware-based authentication\
-   Error handling\
-   Production build setup for frontend

### 🧭 Frontend Routing

  Path          Page       Protected
  ------------- ---------- -----------
  `/`           Home       Yes
  `/login`      Login      No
  `/signup`     Sign Up    No
  `/profile`    Profile    Yes
  `/settings`   Settings   No

------------------------------------------------------------------------

# 📂 Project Structure

### Frontend

    frontend/
    ├── src/
    │   ├── App.jsx
    │   ├── App.css
    │   ├── themes.css
    │   ├── Components/
    │   │   └── Navbar.jsx
    │   ├── pages/
    │   │   ├── HomePage.jsx
    │   │   ├── LoginPage.jsx
    │   │   ├── SignUpPage.jsx
    │   │   ├── ProfilePage.jsx
    │   │   └── SettingsPage.jsx
    │   ├── store/
    │   │   ├── useAuthStore.js
    │   │   └── useThemeStore.js
    │   └── ...

### Backend

    backend/
    ├── index.js
    ├── routes/
    │   ├── auth.route.js
    │   ├── message.route.js
    │   └── file.route.js
    ├── lib/
    │   ├── socket.js
    │   └── db.js
    ├── uploads/
    └── .env

------------------------------------------------------------------------

# ⚙️ Installation & Setup

## 1️⃣ Clone the repository

    git clone <your-repository-url>
    cd project-folder

------------------------------------------------------------------------

# 🛠 Backend Setup

### Install dependencies

    cd backend
    npm install

### Create `.env` file

    PORT=5001
    MONGODB_URI=your_mongodb_connection
    JWT_SECRET=your_secret_key
    NODE_ENV=development

### Start server

    npm start

------------------------------------------------------------------------

# 🎨 Frontend Setup

### Install dependencies

    cd frontend
    npm install

### Start development server

    npm run dev

------------------------------------------------------------------------

# 🔌 API Documentation

## 🔐 **Auth Routes**

  Method   Route            Description
  -------- ---------------- ---------------------
  POST     `/auth/signup`   Register a new user
  POST     `/auth/login`    Login user
  POST     `/auth/logout`   Logout user
  GET      `/auth/check`    Check login status

------------------------------------------------------------------------

## 💬 **Message Routes**

  Method   Route                  Description
  -------- ---------------------- ---------------------------------
  POST     `/messages/send/:id`   Send a message to a user
  GET      `/messages/:id`        Fetch chat messages with a user

------------------------------------------------------------------------

## 📁 **File Routes**

  Method   Route               Description
  -------- ------------------- ----------------------
  POST     `/files/upload`     Upload files/images
  GET      `/uploads/<file>`   Access uploaded file

------------------------------------------------------------------------

# ⚡ Socket.io Events

### Client → Server

    "join"
    "send_message"

### Server → Client

    "online_users"
    "receive_message"

------------------------------------------------------------------------

# 📸 Screenshots

Add your images inside a `/screenshots` folder.

------------------------------------------------------------------------

# 🧱 Architecture Diagram

    React (Frontend UI)
           |
           v
    Express API ---- MongoDB
           |
           v
      Socket.io (Realtime)

------------------------------------------------------------------------

# 📜 Environment Variables Documentation

  Variable        Description
  --------------- ---------------------------
  `PORT`          App port
  `MONGODB_URI`   MongoDB connection string
  `JWT_SECRET`    Token signing key
  `NODE_ENV`      development / production

------------------------------------------------------------------------

# 🤝 Contribution Guidelines

1.  Fork\
2.  Create branch\
3.  Commit\
4.  Push\
5.  Create PR

------------------------------------------------------------------------

# 📝 License

MIT License

------------------------------------------------------------------------

# ⭐ Author

**Surekha L**\
Full-Stack Developer \| MERN \| Web Applications
