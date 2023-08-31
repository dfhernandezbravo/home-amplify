import axios from 'axios';

export const remoteConfigInstance = axios.create({
  baseURL: 'api/cms/remote-config',
  headers: {
    'Content-Type': 'application/json',
  },
});
