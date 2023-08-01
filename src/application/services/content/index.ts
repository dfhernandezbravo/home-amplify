import { environments } from '@/domain/env/environments';
import { ContentStruct } from './../../../domain/interfaces/Content.types';
import axios from 'axios';

const ContentService = {
  getContent: async (): Promise<ContentStruct[]> => {
    // Reemplazar por bff
    const response = await axios.get(
      `https://cl-ccom-cms-delivery.ecomm-stg.cencosud.com/views/cl/easy/EasyWeb/home-headless`,
      {
        headers: {
          // x-api-key
          apiKey: environments().cmsAPIKEY,
        },
      },
    );
    if (response?.data) return response.data;
    return [];
  },

  getEventContent: async (
    landing: string | string[],
  ): Promise<ContentStruct[]> => {
    // Reemplazar por bff
    const response = await axios.get(
      `https://cl-ccom-cms-delivery.ecomm-stg.cencosud.com/views/cl/easy/EasyWeb/landing-${landing}`,
      {
        headers: {
          apiKey: environments().cmsAPIKEY,
        },
      },
    );
    if (response?.data) return response.data;
    return [];
  },
};
export default ContentService;
