export type ItemMenuIconsStruct = {
  title: string;
  image: string;
  alt: string;
  link: string;
};

export type MenuIconsStruct = {
  title: string;
  itemsPerRow: number;
  items: ItemMenuIconsStruct[];
};
