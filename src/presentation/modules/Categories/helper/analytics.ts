import { Promotion } from '@/domain/entities/analytics/analytics';
import { ItemStruct } from '../Categories.types';

export const handlePromotionsImpressions = (
  item: ItemStruct,
  index: number,
): Promotion => {
  return {
    id: 'Burbuja',
    name: `${item.title}`,
    creative: `${item.image}`,
    position: `Burbuja ${index + 1}`,
  };
};
