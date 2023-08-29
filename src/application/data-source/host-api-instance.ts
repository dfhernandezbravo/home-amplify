import axios from 'axios';

export const hostApiInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_HOST_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
