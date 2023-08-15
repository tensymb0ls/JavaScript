import axios from 'axios';
const baseURL = 'https://teststag.smrtstats.com:8888/api/v1';
export const instance = axios.create({ baseURL });
