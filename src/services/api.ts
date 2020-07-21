import axios from 'axios';

const api = axios.create({
  baseURL: 'https://gostack-gobarber-api.herokuapp.com',
});

export default api;
