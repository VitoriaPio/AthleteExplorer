import axios from 'axios';

// URL da API
export const BASE_URL = '';

export const thingspeakAPIConfig = axios.create({
  baseURL: BASE_URL,
});
