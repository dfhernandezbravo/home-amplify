export interface ItemStruct {
  image: string;
  link: string;
  maxHeight: string;
  mobileImage: string;
  title: string;
  width: string;
}

export interface FeaturedCategoriesStruct {
  component: string;
  desktop: boolean;
  mobile: boolean;
  pagination: boolean;
  title: string;
  items: ItemStruct[];
}
