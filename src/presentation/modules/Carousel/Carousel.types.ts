import { CSSProperties } from 'styled-components';

export type ItemStruct = {
  image: string;
  mobileImage: string;
  altDescription: string;
  link: string;
  title: string;
  redirectType: string;
};

export type CarouselStruct = {
  items: ItemStruct[];
  itemsPerRow: number;
  styles: CSSProperties;
};
