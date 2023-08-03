import { customDispatchEvent } from '@/presentation/store/events/dispatchEvents';
import WindowsEvents from '@/presentation/events';

type AnalyticsEvents =
  | 'promotionsViews'
  | 'promotionClick'
  | 'impressions'
  | 'productClick'
  | 'addToCart'
  | 'PageviewVirtual';

type Promotion = {
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

export type Product = {
  name: string;
  id: string;
  price: number;
  brand: string;
  category: string;
  variant: string;
  position: number;
  quantity?: number;
};

type EcommerceImpressions = {
  currencyCode: string;
  impressions: Product[];
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
  products: Product[];
};

type EcommerceProductClick = {
  currencyCode: string;
  click: Click;
  tipoClic: string;
};

type ProductClickEvent = {
  event: AnalyticsEvents;
  ecommerce: EcommerceProductClick;
};

type Add = {
  products: Product[];
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

interface UseAnalytics {
  sendPromotionImpressionEvent: (data: PromotionImpressionEvent) => void;
  sendPromotionClickEvent: (data: PromotionClickEvent) => void;
  sendImpressionsEvent: (data: ImpressionsEvent) => void;
  sendProductClickEvent: (data: ProductClickEvent) => void;
  sendAddToCartEvent: (data: AddToCartEvent) => void;
  sendPageviewVirtualEvent: (data: PageviewVirtualEvent) => void;
}

const useAnalytics = () => {
  const methods: UseAnalytics = {
    sendPromotionImpressionEvent: (data) => {
      customDispatchEvent({
        name: WindowsEvents.ANALYTICS,
        detail: {
          ...data,
        },
      });
    },
    sendPromotionClickEvent: (data) => {
      console.log('sendPromotionClickEvent data ', data);
      customDispatchEvent({
        name: WindowsEvents.ANALYTICS,
        detail: {
          ...data,
        },
      });
    },
    sendImpressionsEvent: (data) => {
      customDispatchEvent({
        name: WindowsEvents.ANALYTICS,
        detail: {
          ...data,
        },
      });
    },
    sendProductClickEvent: (data) => {
      customDispatchEvent({
        name: WindowsEvents.ANALYTICS,
        detail: {
          ...data,
        },
      });
    },
    sendAddToCartEvent: (data) => {
      customDispatchEvent({
        name: WindowsEvents.ANALYTICS,
        detail: {
          ...data,
        },
      });
    },
    sendPageviewVirtualEvent: (data) => {
      customDispatchEvent({
        name: WindowsEvents.ANALYTICS,
        detail: {
          ...data,
        },
      });
    },
  };

  return { methods };
};

export default useAnalytics;
