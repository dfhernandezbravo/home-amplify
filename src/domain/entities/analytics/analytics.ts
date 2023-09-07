import { ItemContent } from '../content/content.types';

type AnalyticsEvents =
  | 'promotionsViews'
  | 'promotionClick'
  | 'impressions'
  | 'productClick'
  | 'addToCart'
  | 'PageviewVirtual';

export type Promotion = {
  id: string;
  name: string;
  creative: string;
  position: string;
};

type Promotions = {
  promotions: Promotion[];
};

type EcommerceView = {
  promoView: Promotions;
};

type PromotionImpressionEvent = {
  event: AnalyticsEvents;
  ecommerce: EcommerceView;
};

type EcommerceClick = {
  promoClick: Promotions;
};

type PromotionClickEvent = {
  event: AnalyticsEvents;
  ecommerce: EcommerceClick;
};

export type ProductAnalytics = {
  name: string;
  id: string;
  price: number;
  brand: string;
  category: string;
  variant: string;
  position: number;
  list?: string;
  quantity?: number;
};

type EcommerceImpressions = {
  currencyCode: string;
  impressions: ProductAnalytics[];
};

type ImpressionsEvent = {
  event: AnalyticsEvents;
  ecommerce: EcommerceImpressions;
};

type List = {
  list: string;
};

type Click = {
  actionField: List;
  products: ProductAnalytics[];
};

type EcommerceProductClick = {
  currencyCode: string;
  click: Click;
  tipoClic: string;
};

export type ProductClickEvent = {
  event: AnalyticsEvents;
  ecommerce: EcommerceProductClick;
};

type Add = {
  products: ProductAnalytics[];
};

type EcommerceAddToCart = {
  currencyCode: string;
  add: Add;
};

type AddToCartEvent = {
  event: AnalyticsEvents;
  ecommerce: EcommerceAddToCart;
};

type PageviewVirtualEvent = {
  event: AnalyticsEvents;
  page: string;
  title: string;
  location: string;
};

export type ItemImpression = {
  image: string;
  title: string;
};

export interface UseAnalytics {
  dispatchAnalyticsEvent: <T>(data: T) => void;
  sendPromotionImpressionEvent: (data: PromotionImpressionEvent) => void;
  sendPromotionClickEvent: (data: PromotionClickEvent) => void;
  sendImpressionsEvent: (data: ImpressionsEvent) => void;
  sendProductClickEvent: (data: ProductClickEvent) => void;
  sendAddToCartEvent: (data: AddToCartEvent) => void;
  sendPageviewVirtualEvent: (data: PageviewVirtualEvent) => void;
}

export type ItemImpressionsProps = {
  index: number;
  item: ItemContent;
  handlePromotionsImpressions?: (item: ItemImpression, index: number) => void;
};

export type FeaturedCategoriesItemImpressionsProps = {
  index: number;
  item: ItemContent;
  handlePromotionsImpressions?: (item: ItemImpression, index: number) => void;
};
