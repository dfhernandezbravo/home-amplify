export type BrandItem = {
  image: string;
  alt: string;
  title: string;
  link: string;
};

type onHover = {
  borderColor: string;
  textColor: string;
  bgColor: string;
  opacity: string;
  shadow: boolean;
};

export type BrandListStruct = {
  title: string;
  itemPerRow: number;
  items: BrandItem[];
  onHover: onHover;
};