import { environments } from '@/domain/env/environments';
import axios from 'axios';

const ContentService = {

  getContent: async (): Promise<any> => {
    const response = await axios.get('/api/content');
    if (response?.data) return response.data;
    return [];
  },
};
export default ContentService;
