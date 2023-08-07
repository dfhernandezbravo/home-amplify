import { ProductModel } from '@/presentation/store/products/product.type';

export type ProductCarouselStruct = {
  clusterId: string;
  skuList: string;
  onAddToCart: (product: ProductModel) => void;
};
