import { ProductSkuSellers } from '@/domain/entities/products/skus';
import { calculateDiscount, formatPrice } from '@/presentation/hooks/utils';

export const handlePrices = (seller: ProductSkuSellers, type: string) => {
  const defaultValue = formatPrice(seller?.commertialOffer?.Price);
  switch (type) {
    case 'PRICE':
      return `$${defaultValue}`;
    case 'NORMAL':
      const normalPrice = formatPrice(seller?.commertialOffer?.ListPrice);
      return defaultValue < normalPrice && `Normal:$${normalPrice}`;
    case 'DISCOUNT':
      const discount = calculateDiscount(
        seller?.commertialOffer?.Price,
        seller?.commertialOffer?.ListPrice,
      );
      return parseFloat(discount) > 0 && `${discount}%`;
    default:
      return `$${defaultValue}`;
  }
};
