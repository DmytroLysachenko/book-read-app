import axios from 'axios';

export const bookReadAPI = axios.create({
  baseURL: 'https://bookread-backend.goit.global',
});
