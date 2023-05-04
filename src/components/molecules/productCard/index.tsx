import Image from "next/image";

import AddCartButton from "@/components/atoms/addCartButton";
import { ProductCardProps } from "./productCard.types";
import { AddToCartContainer, Description, Price, ProductCardContainer, Title } from "./productCard.styles";

const ProductCard = (props: ProductCardProps) => {

  const { product, onAddToCart } = props;

  return (
    <ProductCardContainer>
      <Image
        src={product.image}
        alt={product.title}
        width={200}
        height={200}
      />      

      <Title>{product.title.slice(0, 30)}</Title>
      <Description>{product.description.slice(0, 50)}</Description>
      <Price>${product.price}</Price>
      <AddToCartContainer>
        <AddCartButton
          addNew={() => onAddToCart(product)}
        />
      </AddToCartContainer>
    </ProductCardContainer>
  )
};
export default ProductCard;