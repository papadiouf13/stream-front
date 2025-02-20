import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

if (!baseURL) {
  throw new Error("La variable d'environnement VITE_BASE_URL est introuvable.");
}

const api = axios.create({
  baseURL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
