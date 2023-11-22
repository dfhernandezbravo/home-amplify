import { ProductImageCard, ProductImageContainer } from './style';

interface Props {
  imageUrl: string;
  children: React.ReactNode;
}

const ProductImage = ({ imageUrl, children }: Props) => {
  return (
    <ProductImageContainer>
      <ProductImageCard
        src={imageUrl}
        alt={imageUrl}
        width={0}
        height={0}
        sizes="100vw"
      />
      {children}
    </ProductImageContainer>
  );
};

export default ProductImage;
