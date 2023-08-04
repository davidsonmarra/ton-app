import axios, { AxiosInstance } from 'axios';
import { BASE_URL } from '../../helpers';

export const api: AxiosInstance = axios.create({
  baseURL: BASE_URL
});
