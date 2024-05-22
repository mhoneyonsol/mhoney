// src/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.openai.com/v1', // Correct base URL
  headers: {
    'Authorization': 'Bearer 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', // Your actual API key

  }
});

export default axiosInstance;