export interface ItemStruct {
  description: string;
  image: string;
  mobileImage: string;
  link: string;
  alt: string;
  width: number;
  rows: number;
}

export interface CalugaStruct {
  component: string;
  title: string;
  isFooter: boolean;
  items: ItemStruct[];
}
