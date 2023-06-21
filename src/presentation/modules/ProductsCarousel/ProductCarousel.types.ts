import { ProductModel } from '@/presentation/store/products/product.type';

export type ProductCarouselProps = {
  productClusterId: string;
  onAddToCart: (product: ProductModel) => void;
};
