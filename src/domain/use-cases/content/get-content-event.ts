import ContentService from '@/application/services/content';
import {
  ContentBody,
  StoreProps,
} from '@/domain/entities/content/content.types';

type ViewType<T extends string> = T extends 'store'
  ? StoreProps[]
  : ContentBody[];

const getContentEvent = async <T extends string>(
  view: T,
  event?: string,
): Promise<ViewType<T>> => {
  try {
    const { data } = await ContentService.getContentWithEvent(view, event);
    return data.content as ViewType<T>;
  } catch (error) {
    throw new Error('');
  }
};

export default getContentEvent;
