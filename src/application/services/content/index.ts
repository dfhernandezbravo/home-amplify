import { ContentStruct } from './../../../domain/interfaces/Content.types';
import axios from 'axios';

const ContentService = {

  getContent: async (): Promise<ContentStruct[]> => {
    const response = await axios.get('/api/content');
    if (response?.data) return response.data;
    return [];
  },
};
export default ContentService;
