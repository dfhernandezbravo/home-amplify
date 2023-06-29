import { ProductCardStruct } from './ProductCard.types';
import {
  AddButton,
  AddToCartContainer,
  Description,
  ProductCardContainer,
  Ribbon,
  StyledLink,
  Title,
} from './ProductCard.styles';
import { useEffect, useState } from 'react';
import ProductPrice from './Components/ProductPrice';
import ImageContainer from './Components/ImageContainer';
import useBreakpoints from '@/presentation/hooks/useBreakpoints';
import { ProductModel } from '@/presentation/store/products/product.type';
import { customDispatchEvent } from '@/presentation/store/events/dispatchEvents';

const ProductCard = (props: ProductCardStruct) => {
  // Props
  const { product } = props;

  // State
  const [productHighligts, setProductHighligts] = useState<any[]>();
  const [price, setPrice] = useState(0);
  const [oldPrice, setOldPrice] = useState(0);
  const [description, setDescription] = useState('');

  // Hooks
  const { isSm, isXs } = useBreakpoints();

  const addToCart = (product: ProductModel) => {
    customDispatchEvent({
      name: 'ADD_PRODUCT_IN_CART',
      detail: { ...product, quantity: 1 },
    });
  };

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
          {productHighligts[productHighligts.length - 1]}
        </Ribbon>
      ) : null}
      <StyledLink href={`https://www.easy.cl/${product?.linkText}/p`}>
        <ImageContainer
          image1={product.items?.[0].images?.[0]?.imageUrl}
          image2={product.items?.[0].images?.[1]?.imageUrl}
          alt={`${product.brand} picture`}
        />
        <div>
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
        </div>
      </StyledLink>
      <AddToCartContainer>
        <AddButton
          variant="outlined"
          type="button"
          onClick={() => addToCart(product)}
        >
          Añadir al carro
        </AddButton>
      </AddToCartContainer>
    </ProductCardContainer>
  );
};

export default ProductCard;
