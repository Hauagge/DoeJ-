import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_DOEJA_URL,
    /* baseURL: process.env.REACT_APP_API_DOEJA_LOCAL_URL */
});

export default api;
