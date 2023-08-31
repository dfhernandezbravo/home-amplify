export type ProductCommertialOfferStruct = {
  Price: number;
  PriceWithoutDiscount: number;
  ListPrice: number;
};

export type ProductSkuSellers = {
  commertialOffer: ProductCommertialOfferStruct;
};

export type ProductSkusImage = {
  imageId: string;
  imageUrl: string;
};

export type ProductSkusItems = {
  sellers: ProductSkuSellers[];
  images: ProductSkusImage[];
};

export interface ProductSkuStruct {
  link: string;
  productName: string;
  brand: string;
  items: ProductSkusItems[];
  productId: string;
}
