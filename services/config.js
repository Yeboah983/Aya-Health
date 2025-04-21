import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

export const apiClient = axios.create({
  baseURL: baseURL,
});

apiClient.interceptors.request.use((config) => {
  // Get access token from localStorage
  const token = localStorage.getItem("token");
  //Attach token to authorization header
  config.headers.Authorization = `Bearer ${token}`;
  //Return Config
  return config;
});
