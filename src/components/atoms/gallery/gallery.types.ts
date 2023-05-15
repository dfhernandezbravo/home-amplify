import { Url } from "next/dist/shared/lib/router/router";
import { CSSProperties } from "styled-components";

export type GalleryItemProps = {
  image?: string;
  mobileImage?: string;
  altDescription?: string;
  link: Url;
  title?: string;
  redirectType?: string;
};

export type GalleryProps = {
  items: GalleryItemProps[];
  carouselMode?: boolean;
  itemsPerRow: number;
  styles?: CSSProperties;
};
