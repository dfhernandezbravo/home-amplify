export type ItemStruct = {
  title: string;
  image: string;
  link: string;
};

export type CategoriesStruct = {
  items: ItemStruct[];
  variant?: string;
};
