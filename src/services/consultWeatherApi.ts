import axios from 'axios';

const api = axios.create({
  baseURL: 'http:api.openweathermap.org/data/2.5/',
  timeout: 20000,
});

export default api;
