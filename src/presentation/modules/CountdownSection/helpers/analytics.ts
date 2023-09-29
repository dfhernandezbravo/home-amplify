import { ProductAnalytics } from '@/domain/entities/analytics/analytics';
import { Product } from '@/presentation/store/products/product.type';

export const itemProperty = (propertie: string | undefined): string => {
  return propertie || '';
};

export const itemProperties = (item: Product) => {
  const itemSelected = item?.items?.[0];

  return {
    name: itemProperty(itemSelected?.name),
    id: itemProperty(itemSelected?.referenceId?.[0].Value),
    brand: itemProperty(item?.brand),
    category: itemProperty(item?.categories?.[0]),
    variant: itemProperty(itemSelected?.referenceId?.[0].Value),
  };
};

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
