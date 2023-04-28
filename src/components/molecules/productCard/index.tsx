import Image from "next/image";

import { useEffect, useState } from "react";
import { CartItemModel } from "@/store/cart/cart.type";
import AddCartButton from "@/components/atoms/addCartButton";
import { ProductCardProps } from "./productCard.types";
import { AddToCartContainer, Price, ProductCardContainer, Title } from "./productCard.styles";

const ProductCard = (props: ProductCardProps) => {

  const { product, cart, onAddToCart, onDeleteFromCart } = props;

  // states
  const [existInCart, setExistInCart] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(0);

  // on load product
  useEffect(() => {
    if (cart?.length > 0) {
      const productInCart = cart.find((pr: CartItemModel) => pr.id === product.id);
      setExistInCart(productInCart !== undefined);
      setQuantity(productInCart?.quantity || 0)
    } else {
      setExistInCart(false)
    }
  }, [product, cart])

  return (
    <ProductCardContainer>
      <Image
        src={product.image}
        alt={product.title}
        width={200}
        height={200}
      />
      <Price>US$ {product.price}</Price>

      <Title>{product.title}</Title>
      <Title><b>{product.category}</b></Title>
      <AddToCartContainer>
        <AddCartButton
          addNew={() => {
            console.log('add new', product);
            onAddToCart(product);
          }}
          remove={() => onDeleteFromCart(product)}
          addExisting={() => onAddToCart(product)}
          enable={existInCart}
          quantity={quantity}
        />
      </AddToCartContainer>
    </ProductCardContainer>
  )
};
export default ProductCard;