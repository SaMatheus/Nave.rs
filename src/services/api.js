import axios from 'axios';
import { getToken } from './auth';

const api = axios.create({
  baseURL: 'https://navedex-api.herokuapp.com/v1',
});

api.interceptors.request.use(
  async (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    config.headers.ContentType = 'application/json';
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
