
// src/axiosInstance.js
require('dotenv').config();
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.openai.com/v1',
  headers: {
    'Authorization': `Bearer sk-proj-Cztaf9g8C2hKP7C0WXX8T3BlbkFJB2q1GkLQD9WrbeyhsDE4`,
    'Content-Type': 'application/json'
  }
});

export default axiosInstance;