import axios from 'axios';

// URL da API
export const BASE_URL = 'https://api.thingspeak.com/channels/2376505/fields/1.json?results=2';

export const thingspeakAPIConfig = axios.create({
  baseURL: BASE_URL,
});
