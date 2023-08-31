import { ContentCMS } from '../../../domain/entities/content/content.types';
import axios from 'axios';

const ContentService = {
  getContent: async (): Promise<ContentCMS[]> => {
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

  getEventContent: async (landing: string): Promise<ContentCMS[]> => {
    // Reemplazar por bff
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BFF_WEB_URL}cms/views/${encodeURIComponent(
        `landing-${landing}`,
      )}`,
      {
        headers: {
          'x-api-key': `${process.env.NEXT_PUBLIC_API_KEY_BFF_WEB}`,
        },
      },
    );
    if (response?.data) return response.data;
    return [];
  },

  getWorkspaceContent: async (event: string): Promise<ContentCMS[]> => {
    const response = await axios.get(
      `/api/event/${encodeURIComponent(event)}`,
      {
        headers: {
          apiKey: process.env.NEXT_PUBLIC_CMS_API_KEY,
        },
      },
    );
    if (response?.data) return response.data;
    return [];
  },
};
export default ContentService;
