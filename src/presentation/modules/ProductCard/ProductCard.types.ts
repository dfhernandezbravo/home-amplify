import { ProductModel } from '@/presentation/store/products/product.type';

export type ProductCardProps = {
  product: ProductModel;
  onAddToCart: (product: ProductModel) => void;
};
