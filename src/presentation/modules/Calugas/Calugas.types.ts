export interface Items {
  description: string;
  image: string;
  ['image-mobile']: string;
  link: string;
  title: string;
  width: string;
};

export interface CalugaStruct {
  component: string;
  title: string;
  items: Items[]
};
