import { Product } from '@/presentation/store/products/product.type';

export type ProductCarouselStruct = {
  clusterId: string;
  title: string;
  items: string;
  fieldName: 'clusterId' | 'skuId' | 'productId';
  onAddToCart: (product: Product) => void;
  maxItems: number;
};
