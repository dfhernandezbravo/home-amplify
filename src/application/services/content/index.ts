import { ContentCMS } from '../../../domain/entities/content/content.types';
import axios, { AxiosResponse, AxiosRequestHeaders } from 'axios';
import { bffWebInstance } from '@/application/data-source/bff-web-instance';

const ContentService = {
  /**
   * @deprecated
   * @returns
   */
  getContent: async (): Promise<ContentCMS | null> => {
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
    return null;
  },

  /**
   * @deprecated
   * @returns
   */
  getEventContent: async (landing: string): Promise<ContentCMS | null> => {
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
    return null;
  },

  /**
   * @deprecated
   * @returns
   */
  getWorkspaceContent: async (event: string): Promise<ContentCMS | null> => {
    const response = await axios.get(
      `/api/event/${encodeURIComponent(event)}`,
      {
        headers: {
          apiKey: process.env.NEXT_PUBLIC_CMS_API_KEY,
        },
      },
    );
    if (response?.data) return response.data;
    return null;
  },

  getContentWithEvent: async (
    view: string,
    event?: string,
  ): Promise<AxiosResponse<ContentCMS | { content: [] }>> => {
    try {
      const response: AxiosResponse<ContentCMS> = await bffWebInstance.get(
        `/cms/views/${view}`,
        {
          params: { eventName: event || 'default' },
        },
      );
      return response;
    } catch (error) {
      return {
        data: { content: [] },
        status: 404,
        statusText: 'Error',
        headers: {} as AxiosRequestHeaders,
        config: {
          headers: {} as AxiosRequestHeaders,
        },
      };
    }
  },
};
export default ContentService;
