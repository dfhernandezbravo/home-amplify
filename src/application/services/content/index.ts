import { cmsInstance } from '@/application/data-source/cms-api-instance';
import { ContentCMS } from '../../../domain/entities/content/content.types';
import axios, { AxiosResponse } from 'axios';
import { bffWebInstance } from '@/application/data-source/bff-web-instance';

const ContentService = {
  getContent: async (): Promise<ContentCMS[]> => {
    // Reemplazar por bff
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BFF_WEB_URL}cms/views/home-headless`,
      {
        headers: {
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

  getContentWithEvent: async (
    view: string,
    event: string,
  ): Promise<AxiosResponse<ContentCMS>> =>
    bffWebInstance.get(`/cms/views/${view}`, { params: { eventName: event } }),
};
export default ContentService;
