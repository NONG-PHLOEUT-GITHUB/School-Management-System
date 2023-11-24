import axios from "axios";
const api = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,//get for env.local
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-type": "application/json",
  },
});

// Add a request interceptor to add the Authorization header with the token
api.interceptors.request.use(async (config) => {
  const token = await getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Function to refresh the token
const refreshToken = async () => {
  const refreshToken = localStorage.getItem("refresh_token");
  if (!refreshToken) {
    return null;
  }
  try {
    const response = await axios.post('/api/refresh-token', { refresh_token: refreshToken });
    const token = response.data.access_token;
    localStorage.setItem("access_token");
    return token;
  } catch (error) {
    return null;
  }
};

// Function to get the access token
const getAccessToken = async () => {
  const token = localStorage.getItem("access_token");
  if (token) {
    const decodedToken = JSON.parse(atob(token.split('.')[1]));
    const currentTime = new Date().getTime();
    //const expirationTime = currentTime + 24 * 60 * 60;
    const expirationTime = decodedToken.exp * 1000; 
    if (expirationTime <= currentTime < 60 * 60 * 1000) { // Refresh the token if it will expire in less than 1day
      await refreshToken();
    }
    return localStorage.getItem("access_token");
  }
  return null;
};

export default api;