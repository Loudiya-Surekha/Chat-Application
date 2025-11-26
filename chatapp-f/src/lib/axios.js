import axios from "axios";

export const axiosInstance = axios.create({
    // baseURL: "http://localhost:5001/api",
    baseURL: import.meta.env.MODE==="development"? "http://localhost:5001/api" : "/api",

    // baseURL: "https://chatapp-b-k6ft.onrender.com/api", 
    withCredentials: true,
})

// axiosInstance.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });