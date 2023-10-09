/**
 * @deprecated
 * @returns
 */
export type ProductCommertialOfferStruct = {
  Price: number;
  PriceWithoutDiscount: number;
  ListPrice: number;
};
/**
 * @deprecated
 * @returns
 */
export type ProductSkuSellers = {
  commertialOffer: ProductCommertialOfferStruct;
};
/**
 * @deprecated
 * @returns
 */
export type ProductSkusImage = {
  imageId: string;
  imageUrl: string;
};
/**
 * @deprecated
 * @returns
 */
export type ProductSkusItems = {
  sellers: ProductSkuSellers[];
  images: ProductSkusImage[];
};

/**
 * @deprecated
 * @returns
 */
export interface ProductSkuStruct {
  link: string;
  productName: string;
  brand: string;
  items: ProductSkusItems[];
  productId: string;
}
