import { Url } from 'next/dist/shared/lib/router/router';

export type ItemStruct = {
  title?: string;
  image?: string;
  link: Url;
};

export type CategoriesStruct = {
  items: ItemStruct[];
};
