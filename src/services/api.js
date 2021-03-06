import axios from 'axios';

// CORS para liberação do acesso à API
const url = 'https://navedex-api.herokuapp.com/v1/';

const api = axios.create({
  baseURL: url,
});

export default api;
