import axios from "axios";

const api = axios.create({
  baseURL: "https://resume-builder-4ke1.onrender.com",
});

export default api;