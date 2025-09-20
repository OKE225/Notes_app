import axios from "axios";
import type { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
  baseURL: "http://localhost:5001/api",
});

export default api;
