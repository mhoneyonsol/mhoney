// src/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.openai.com/v1',
  headers: {
    'Authorization': `Bearer sk-proj-Cztaf9g8C2hKP7C0WXX8T3BlbkFJB2q1GkLQD9WrbeyhsDE4`,
    'Content-Type': 'application/json'
  }
});

export const fetchOpenAIData = async () => {
  try {
    const response = await axiosInstance.post('/completions', {
      model: 'text-davinci-003', // Replace with the actual model you want to use
      prompt: 'Say this is a test', // Your prompt goes here
      max_tokens: 5
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error('Error response:', error.response.data);
    } else if (error.request) {
      console.error('Error request:', error.request);
    } else {
      console.error('Error message:', error.message);
    }
    throw error;
  }
};

export default axiosInstance;