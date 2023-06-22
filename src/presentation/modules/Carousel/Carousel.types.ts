import { CSSProperties } from 'styled-components';

type CarouselItemProps = {
  image: string;
  mobileImage: string;
  altDescription: string;
  link: string;
  title: string;
  redirectType: string;
};

export type CarouselProps = {
  items: CarouselItemProps[];
  itemsPerRow: number;
  styles: CSSProperties;
};
