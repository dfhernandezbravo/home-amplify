import { Url } from "next/dist/shared/lib/router/router";

export type CategoriesItemProps = {
    title?: string;
    image?: string;
    link: Url;
};

export type CategoriesProps = {
    items: CategoriesItemProps[];
  };