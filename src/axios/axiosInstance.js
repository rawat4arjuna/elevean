import axios from 'axios';

const API_BASE_URL = '/api'; // Replace with your actual API base URL

const API = axios.create({
  baseURL: API_BASE_URL,
});

API.interceptors.request.use(
  (config) => {
    // Implement logic to get your authentication token (e.g., from localStorage, a cookie, or a state management solution)
    const token = localStorage.getItem('authToken'); // Example: getting token from localStorage

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

API.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      // Handle 401 Unauthorized errors (e.g., redirect to login page, refresh token)
      console.error('Unauthorized request. Redirecting to login...');
      // Example: Redirect to login page
      // window.location.href = '/login'; 
    }
    return Promise.reject(error);
  }
);

export default API;