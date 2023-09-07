import axios from 'axios';

export const cmsInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_CMS_URL,
  headers: {
    'Content-Type': 'application/json',
    apikey: process.env.NEXT_PUBLIC_CMS_API_KEY,
  },
});
