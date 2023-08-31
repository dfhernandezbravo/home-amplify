import { Product } from '@/presentation/store/products/product.type';

export type ProductCardStruct = {
  product: Product;
  onAddToCart: (product: Product) => void;
  position?: number;
  handleProductImpression?: (product: Product, position: number) => void;
};
