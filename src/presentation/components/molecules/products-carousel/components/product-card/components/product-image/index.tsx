import { ProductImage } from '@/domain/entities/products/product-image';
import { ProductImageCard, ProductImageContainer } from './style';

interface Props {
  images: ProductImage[];
  children: React.ReactNode;
}

const ProductImage = ({ images, children }: Props) => {
  return (
    <ProductImageContainer>
      <ProductImageCard
        src={images[0].imageUrl}
        alt={images[0].imageUrl}
        width={0}
        height={0}
        sizes="100vw"
      />
      {children}
    </ProductImageContainer>
  );
};

export default ProductImage;
