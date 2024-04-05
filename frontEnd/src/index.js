import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5001/api', // Adjust the base URL according to your server configuration
    timeout: 5000, // Adjust the timeout as needed
});

export default api;
