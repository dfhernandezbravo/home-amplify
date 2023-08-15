  export type QuickCategoryItems = {
    background: string;
    link: string;
    title: string;
  }

  export interface QuickCategoryStruct {
    component: string;
    categoryId: string;
    categoryIcon: string;
    backgroundCategory: string;
    link: string;
    redirectionIcon: string;
    backgroundContainer: string;
    items: QuickCategoryItems[]
  }