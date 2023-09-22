import { ProductSkuSellers } from '@/domain/entities/products/skus';
import { calculateDiscount, formatPrice } from '@/presentation/hooks/utils';

const formatText = (value: boolean, number2: string) => {
  return value && number2;
};

export const handlePrices = (seller: ProductSkuSellers, type: string) => {
  const defaultValue = formatPrice(seller?.commertialOffer?.Price);
  const normalPrice = formatPrice(seller?.commertialOffer?.ListPrice);
  const discount = calculateDiscount(
    seller?.commertialOffer?.Price,
    seller?.commertialOffer?.ListPrice,
  );

  switch (type) {
    case 'PRICE':
      return `$${defaultValue}`;
    case 'NORMAL':
      return formatText(defaultValue < normalPrice, `Normal:$${normalPrice}`);
    case 'DISCOUNT':
      return formatText(parseFloat(discount) > 0, `${discount}%`);
    default:
      return `$${defaultValue}`;
  }
};
