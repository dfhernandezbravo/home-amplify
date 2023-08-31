import axios from 'axios';

export const awsPersonalizeInstance = axios.create({
  baseURL: 'api/products/aws-personalize',
  headers: {
    'Content-Type': 'application/json',
  },
});
