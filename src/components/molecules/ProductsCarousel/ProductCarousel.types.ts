import { ProductModel } from '@/store/products/product.type';

export type ProductCarouselProps = {
  productClusterId: string;
  onAddToCart: (product: ProductModel) => void;
};
