export enum ShapeTypes {
  CIRCLE = 'circle',
  SQUARE = 'square'
}

export type ItemStruct = {
  title: string;
  image: string;
  link: string;
};

export type CategoriesStruct = {
  items: ItemStruct[];
  shape: ShapeTypes;
  itemsPerRow: number;
};

