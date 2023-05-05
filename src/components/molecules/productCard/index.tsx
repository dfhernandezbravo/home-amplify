import Image from "next/image";

import AddCartButton from "@/components/atoms/addCartButton";
import { ProductCardProps } from "./productCard.types";
import {
  AddToCartContainer,
  Body,
  Description,
  ImageContainer,
  Price,
  ProductCardContainer,
  Title,
} from "./productCard.styles";

const ProductCard = (props: ProductCardProps) => {
  const { product, onAddToCart } = props;

  return (
    <ProductCardContainer>
      <Body>
        <ImageContainer>
          <Image
            src={product.image}
            alt={product.title}
            height={300}
            width={200}
          />
        </ImageContainer>
        <Title>{product.title.slice(0, 30)}</Title>
        <Description>{product.description.slice(0, 50)}</Description>
        <Price>${product.price}</Price>
      </Body>
      <AddToCartContainer>
        <AddCartButton addNew={() => onAddToCart(product)} />
      </AddToCartContainer>
    </ProductCardContainer>
  );
};
export default ProductCard;
