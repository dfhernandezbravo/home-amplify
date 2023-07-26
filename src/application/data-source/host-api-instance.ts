import { environments } from '@/domain/env/environments';
import axios from 'axios';

export const hostApiInstance = axios.create({
  baseURL: environments().hostURI,
  headers: {
    'Content-Type': 'application/json',
  },
});