import ContentService from '@/application/services/content';

const getContentEvent = async (view: string, event: string) => {
  try {
    const { data } = await ContentService.getContentWithEvent(view, event);
    return data.content;
  } catch (error) {
    return error;
  }
};

export default getContentEvent;
