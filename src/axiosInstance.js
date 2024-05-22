// src/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.openai.com', // replace with your API base URL
  headers: {
    'Authorization': `Bearer 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` // replace YOUR_API_KEY with your actual API key
  }
});

export default axiosInstance;
