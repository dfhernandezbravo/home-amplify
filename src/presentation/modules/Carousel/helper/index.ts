import { ItemContent } from '@/domain/entities/content/content.types';

export const getImage = (item: ItemContent, isLg: boolean, isSm: boolean) => {
  return isLg || isSm ? item.image : item.mobileImage;
};

export const haveImage = (item: ItemContent) => {
  return item.image && item.mobileImage;
};

export const linkValue = (item: ItemContent) => {
  return item.link || '';
};
