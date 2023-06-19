import { ProductCardProps } from './ProductCard.types';
import {
  AddToCartContainer,
  Container,
  Description,
  ProductCardContainer,
  Ribbon,
  StyledLink,
  Title,
} from './ProductCard.styles';
import { Button } from '@/components/atoms/Button';
import { useEffect, useState } from 'react';
import ProductPrice from './Components/ProductPrice';
import ImageContainer from './Components/ImageContainer';
import useBreakpoints from '@/hooks/useBreakpoints';

const ProductCard = (props: ProductCardProps) => {
  // Props
  const { product, onAddToCart } = props;

  // State
  const [productHighligts, setProductHighligts] = useState<any[]>();
  const [price, setPrice] = useState(0);
  const [oldPrice, setOldPrice] = useState(0);
  const [description, setDescription] = useState('');

  // Hooks
  const { isSm, isXs } = useBreakpoints();

  useEffect(() => {
    // Setting higlights
    setProductHighligts(Object.values(product?.clusterHighlights));

    // Setting price
    if (product?.items?.[0].sellers?.[0].commertialOffer) {
      setPrice(product?.items?.[0].sellers?.[0].commertialOffer?.Price);
      setOldPrice(product?.items?.[0].sellers?.[0].commertialOffer?.ListPrice);
    }

    // Setting Description
    if (product?.items?.[0].name) {
      setDescription(product?.items?.[0].name);
    }
  }, []);

  return (
    <ProductCardContainer>
      {productHighligts?.length ? (
        <Ribbon>
          {productHighligts[productHighligts.length - 1]?.slice(3)}
        </Ribbon>
      ) : null}
      <StyledLink href={`https://www.easy.cl/${product?.linkText}/p`}>
        <ImageContainer
          image1={product.items?.[0].images?.[0].imageUrl}
          image2={product.items?.[0].images?.[1].imageUrl}
          alt={`${product.brand} picture`}
        />
        <Container>
          <Title>{product.brand.slice(0, 30)}</Title>
          {description && (
            <Description>
              {isSm && description.length > 50
                ? `${description.slice(0, 50)}...`
                : isXs && description.length > 35
                ? `${description.slice(0, 35)}...`
                : description}
            </Description>
          )}
          <ProductPrice price={price} oldPrice={oldPrice} />
        </Container>
      </StyledLink>
      <AddToCartContainer>
        <Button
          variant="outlined"
          type="button"
          onClick={() => onAddToCart(product)}
        >
          Añadir al carro
        </Button>
      </AddToCartContainer>
    </ProductCardContainer>
  );
};

export default ProductCard;
