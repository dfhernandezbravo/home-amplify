import { ProductModel } from '@/presentation/store/products/product.type';

export type ProductCarouselStruct = {
  productClusterId: string;
  onAddToCart: (product: ProductModel) => void;
};
