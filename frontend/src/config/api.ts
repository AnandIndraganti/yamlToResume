// API Configuration
const rawApiUrl = import.meta.env.VITE_API_URL || "http://localhost:8080";
export const API_BASE_URL = rawApiUrl.endsWith("/")
  ? rawApiUrl.slice(0, -1)
  : rawApiUrl;

export const API_ENDPOINTS = {
  COMPILE: `${API_BASE_URL}/compile`,
};
