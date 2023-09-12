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
  maxHeight: boolean;
  title: string;
  width: number;
  textItems: TextItems[];
  color: string;
  icon: string;
};

export type CountdownProducts = {
  image: string;
  item: string;
};

export type TitleTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

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
  titleTag: TitleTag;
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
  isEnable: string;
  storeLinkIos: string;
  storeLinkAndroid: string;
  hideTime: number;
  btnCancel: string;
  btnContinue: string;
  description: string;
  image: string;
};

export interface ContentCMS {
  eventName: string;
  viewName: string;
  content: ContentBody[];
}
