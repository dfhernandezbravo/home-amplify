export type ItemMenuIconsStruct = {
  title: string;
  image: string;
  alt: string;
  link: string;
};

export type MenuIconsStruct = {
  title: string;
  isActive: boolean;
  startDate: string;
  endDate: string;
  itemsPerRow: number;
  items: ItemMenuIconsStruct[];
};
