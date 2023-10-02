import ContentService from '@/application/services/content';
import { ContentBody } from '@/domain/entities/content/content.types';

const getContentEvent = async (
  view: string,
  event?: string,
): Promise<ContentBody[]> => {
  try {
    const { data } = await ContentService.getContentWithEvent(view, event);
    return data.content;
  } catch (error) {
    throw new Error('Oh no!');
  }
};

export default getContentEvent;
