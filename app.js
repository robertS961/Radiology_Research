// app.js
const axios = require('axios');

// Replace with your OpenAI API key
const OPENAI_API_KEY = 'insert-api-key-here';

const chatWithGPT = async (userMessage) => {
    try {
        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
            model: 'gpt-3.5-turbo', // or gpt-4 if you have access
            messages: [{ role: 'user', content: userMessage }],
        }, {
            headers: {
                'Authorization': `Bearer ${OPENAI_API_KEY}`,
                'Content-Type': 'application/json',
            }
        });

        const reply = response.data.choices[0].message.content;
        console.log('ChatGPT Reply:', reply);
    } catch (error) {
        console.error('Error calling the API:', error.response ? error.response.data : error.message);
    }
};

// Example usage
chatWithGPT('Hello, how are you?');