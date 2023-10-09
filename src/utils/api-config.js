import axios from 'axios';

export const BASE_URL = 'https://www.thesportsdb.com/api/v1/json/3';

export const baseAPICconfig = axios.create({
  baseURL: BASE_URL,
});
