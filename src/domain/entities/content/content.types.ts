export enum ShapeTypes {
  CIRCLE = 'circle',
  SQUARE = 'square',
}

type TextItems = {
  text: string;
  formatText: string;
};

export type ItemContent = {
  description: string;
  image: string;
  mobileImage: string;
  link: string;
  alt: string;
  rows: number;
  maxHeight: string;
  title: string;
  width: number;
  textItems: TextItems[];
  color: string;
  icon: string;
};

export type CountdownProducts = {
  image: string;
  skuId: string;
};

export type ContentBody = {
  component: string;
  isActive: boolean;
  startDate: string;
  endDate: string;
  alt: string;
  imageDesktop: string;
  imageMobile: string;
  link: string;
  backgroundColor: string;
  fullWidth: boolean;
  title: string;
  isFooter: boolean;
  sliderOnMobileView: boolean;
  items: ItemContent[];
  desktop: boolean;
  mobile: boolean;
  pagination: boolean;
  clusterId: string;
  fieldName: 'clusterId' | 'skuId' | 'productId';
  maxItems: number;
  shape: ShapeTypes;
  itemsPerRow: number;
  backgroundImage: string;
  headerColor: string;
  subtitle: string;
  type: string;
  productList: CountdownProducts[];
  categoryId: string;
  categoryIcon: string;
  backgroundCategory: string;
  redirectionIcon: string;
  backgroundContainer: string;
  campaignName: Campaigns;
};

export interface ContentCMS {
  eventName: string;
  viewName: string;
  content: ContentBody;
}
