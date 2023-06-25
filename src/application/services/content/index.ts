import { environments } from '@/domain/env/environments';
import { ContentStruct } from './../../../domain/interfaces/Content.types';
import axios from 'axios';

const ContentService = {

  getContent: async (): Promise<ContentStruct[]> => {
    const response = await axios.get(`${environments().cmsURI}/home-headless`, { 
      headers: {
        apiKey: environments().cmsAPIKEY
      } 
    });
    if (response?.data) return response.data;
    return [];
  },
};
export default ContentService;
