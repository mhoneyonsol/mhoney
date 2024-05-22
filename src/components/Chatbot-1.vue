<template>
  <div>
    <input v-model="userInput" @keyup.enter="sendMessage" placeholder="Type your message" />
    <button @click="sendMessage">Send</button>
    <div v-if="response">{{ response }}</div>
  </div>
</template>

<script>
import axiosInstance from './axiosInstance';

export default {
  data() {
    return {
      userInput: '',
      response: '',
    };
  },
  methods: {
    async sendMessage() {
      try {
        const res = await axiosInstance.post('/v1/engines/davinci-codex/completions', {
          prompt: this.userInput,
          max_tokens: 150,
          n: 1,
          stop: null,
          temperature: 0.7,
        });
        this.response = res.data.choices[0].text;
      } catch (error) {
        console.error('Error making API request:', error);
        this.response = "Sorry, I am having trouble responding right now.";
      }
    },
  },
};
</script>
