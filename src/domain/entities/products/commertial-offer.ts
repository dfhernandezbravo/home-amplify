import {
  DeliverySlaSamplesEntity,
  DeliverySlaSamplesPerRegion,
} from './delivery-sla-sample';
import { DiscountHighLightEntity } from './discount-highlight';
import { InstallmentsEntity } from './installments';
import { PaymentOptions } from './payment-option';

export type CommertialOffer = {
  DeliverySlaSamplesPerRegion: DeliverySlaSamplesPerRegion;
  Installments?: InstallmentsEntity[];
  DiscountHighLight?: DiscountHighLightEntity[];
  GiftSkuIds?: unknown[];
  Teasers?: unknown[];
  PromotionTeasers?: unknown[];
  BuyTogether?: unknown[];
  ItemMetadataAttachment?: unknown[];
  Price: number;
  ListPrice: number;
  PriceWithoutDiscount: number;
  RewardValue: number;
  PriceValidUntil: string;
  AvailableQuantity: number;
  IsAvailable: boolean;
  Tax: number;
  DeliverySlaSamples?: DeliverySlaSamplesEntity[];
  GetInfoErrorMessage?: null;
  CacheVersionUsedToCallCheckout: string;
  PaymentOptions: PaymentOptions;
};
