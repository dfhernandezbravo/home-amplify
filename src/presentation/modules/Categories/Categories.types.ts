import { ItemContent } from '@/domain/entities/content/content.types';

export enum ShapeTypes {
  CIRCLE = 'circle',
  SQUARE = 'square',
}

export type ItemStruct = {
  title: string;
  image: string;
  link: string;
};

export type CategoriesStruct = {
  items: ItemContent[];
  shape: ShapeTypes;
  itemsPerRow: number;
};
