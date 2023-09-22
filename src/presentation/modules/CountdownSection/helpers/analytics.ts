import { ProductAnalytics } from '@/domain/entities/analytics/analytics';
import { itemProperties } from '@/helpers/analytics';
import { Product } from '@/presentation/store/products/product.type';

export const handleProductImpression = (
  item: Product,
  position: number,
): ProductAnalytics => {
  const itemSelected = item?.items?.[0];

  const product: ProductAnalytics = {
    ...itemProperties(item),
    price: itemSelected?.sellers?.[0].commertialOffer?.Price || 0,
    position: position + 1,
    quantity: 1,
    list: 'Productos Destacados Crono',
  };
  return product;
};
