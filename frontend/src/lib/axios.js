import axios from "axios";

// export const axiosInstance = axios.create({
//     // baseURL: "http://localhost:5001/api",
//     baseURL: import.meta.env.MODE==="development"? "http://localhost:5001/api" : "/api",

//     // baseURL: "https://chatapp-b-k6ft.onrender.com/api", 
//     withCredentials: true,
// })

const BASE_URL = process.env.NODE_ENV === "development"
  ? "http://localhost:5001/api"
  : "/api";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
