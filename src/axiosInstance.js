// src/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.openai.com/v1', // Correct base URL
  headers: {
    'Authorization': 'Bearer proj_f7nVqZd7fz3A3eUpIa6RTcIj', // Your actual API key

  }
});

export default axiosInstance;