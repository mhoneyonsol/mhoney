// src/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.openai.com/v1',
  headers: {
    'Authorization': `Bearer sk-my-service-acc-I530Rcy7xWSfTKtlG2r8T3BlbkFJk8XvEus8UDFHammyol8B`, // Ensure this is your actual API key
    'Content-Type': 'application/json'
  }
});

// Example function to make a request
export const fetchOpenAIData = async () => {
  try {
    const response = await axiosInstance.post('/your-endpoint', {
      // your request payload
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error('Error response:', error.response.data);
    } else if (error.request) {
      // The request was made but no response was received
      console.error('Error request:', error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Error message:', error.message);
    }
    throw error;
  }
};

export default axiosInstance;