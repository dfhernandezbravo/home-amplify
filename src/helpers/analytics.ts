import { Product } from '@/presentation/store/products/product.type';

const itemProperty = (propertie: string | undefined): string => {
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
