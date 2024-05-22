<template>
  <div>
    <input v-model="userInput" @keyup.enter="sendMessage" placeholder="Type your message" />
    <button @click="sendMessage">Send</button>
    <div v-if="response">{{ response }}</div>
    <div v-if="error">{{ error }}</div>
  </div>
</template>

<script>
import axiosInstance from './axiosInstance';

export default {
  data() {
    return {
      userInput: '',
      response: '',
      error: ''
    };
  },
  methods: {
    async sendMessage() {
      try {
        const res = await axiosInstance.post('/completions', {
          model: 'text-davinci-003', // Ensure the model is specified
          prompt: this.userInput,
          max_tokens: 150,
          n: 1,
          stop: null,
          temperature: 0.7,
        });
        this.response = res.data.choices[0].text;
        this.error = ''; // Clear any previous errors
      } catch (error) {
        console.error('Error making API request:', error);
        if (error.response) {
          // The request was made and the server responded with a status code that falls out of the range of 2xx
          console.error('Response data:', error.response.data);
          console.error('Response status:', error.response.status);
          console.error('Response headers:', error.response.headers);
          this.error = `Error: ${error.response.data.error.message}`;
        } else if (error.request) {
          // The request was made but no response was received
          console.error('Request data:', error.request);
          this.error = 'Error communicating with the API: No response received';
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error('Error message:', error.message);
          this.error = `Error: ${error.message}`;
        }
        this.response = ''; // Clear any previous response
      }
    },
  },
};
</script>


<style scoped>
.chatbot {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 300px;
  background: white;
  border: 1px solid #ccc;
  padding: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

.messages {
  max-height: 200px;
  overflow-y: auto;
  margin-bottom: 10px;
}

.message {
  margin-bottom: 5px;
}
</style>