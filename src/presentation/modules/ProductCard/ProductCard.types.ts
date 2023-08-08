import { ProductModel } from '@/presentation/store/products/product.type';

export type ProductCardStruct = {
  product: ProductModel;
  onAddToCart: (product: ProductModel) => void;
  position?: number;
  handleProductImpression?: (product: ProductModel, position: number) => void;
};
