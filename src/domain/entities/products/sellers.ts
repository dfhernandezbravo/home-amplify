import { CommertialOffer } from './commertial-offer';

export type SellersEntity = {
  sellerId: string;
  sellerName: string;
  addToCartLink: string;
  sellerDefault: boolean;
  commertialOffer: CommertialOffer;
};
