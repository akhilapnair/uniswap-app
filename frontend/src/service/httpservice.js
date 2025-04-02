import axios from "axios";

export const API_URL = "https://gattyble-frontend.herokuapp.com";

const httpService = axios.create({
  // baseURL: "https://gattyble-frontend.herokuapp.com",// process.env.NEXT_PUBLIC_API_BASE_URL,
  baseURL: "http://localhost:5000/api",// process.env.NEXT_PUBLIC_API_BASE_URL,

  headers: {
    "Content-Type": "application/json"
  }
});


httpService.interceptors.request.use(
  async(config) => {
    const token = sessionStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

httpService.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && (error.response.status === 401 || error.response.status === 404)) {
      const currentPath = window.location.pathname;
      const excludedPaths = ['/login', '/forgot-password', '/password-reset'];
      if (!excludedPaths.includes(currentPath)) {
        window.location.href = '/login';
        sessionStorage.removeItem("token");
      }
    }
    return Promise.reject(error);
  }
);

export default httpService;
