import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://backend-farmart.onrender.com/api/",
  //baseURL: "http://localhost:5000/api/",
});
