import { environments } from '@/domain/env/environments';
import { ContentStruct } from './../../../domain/interfaces/Content.types';
import axios from 'axios';

const ContentService = {
  getContent: async (): Promise<ContentStruct[]> => {
    // Reemplazar por bff
    const response = await axios.get(
     `${process.env.NEXT_PUBLIC_BFF_WEB_URL}cms/views/home-headless`,
      {
        headers: {
          // x-api-key
          'x-api-key': `${process.env.NEXT_PUBLIC_API_KEY_BFF_WEB}`,
        },
      },
    );
    if (response?.data) return response.data;
    return [];
  },

  getEventContent: async (
    landing: string,
  ): Promise<ContentStruct[]> => {
    // Reemplazar por bff
    const landingName = encodeURIComponent(`landing-${landing}`)
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BFF_WEB_URL}cms/views/${landingName}`,
      {
        headers: {
          'x-api-key': `${process.env.NEXT_PUBLIC_API_KEY_BFF_WEB}`,
        },
      },
    );
    if (response?.data) return response.data;
    return [];
  },

  getWorkspaceContent: async (event: string): Promise<ContentStruct[]> => {
    const eventName = encodeURIComponent(event)
    const response = await axios.get(
      `/api/event/${eventName}`,
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
