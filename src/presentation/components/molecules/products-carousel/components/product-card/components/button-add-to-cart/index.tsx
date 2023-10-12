import React from 'react';
import { AddToCartButton, ButtonContainer } from './style';
import { Product } from '@/domain/entities/products/product.type';
import {
  useAppDispatch,
  useAppSelector,
} from '@/presentation/hooks/storeHooks';
import { ShoppingCart } from '@/domain/entities/shopping-cart/shopping-cart.response';
import {
  SaveShoppingCartItemsRequest,
  SetShoppingCartItemsRequest,
} from '@/domain/entities/shopping-cart/shopping-cart.request';
import { dispatchMinicartSimulateAddProductEvent } from '@/domain/use-cases/shopping-cart/dispatch-mini-cart-event';
import {
  saveItemsShoppingCart,
  setItemsShoppingCart,
} from '@/domain/use-cases/shopping-cart/save-items';
import { Item } from '@/domain/entities/shopping-cart/shopping-cart.entity';

interface Props {
  product: Product;
}

const ButtonAddToCart = ({ product }: Props) => {
  const dispatch = useAppDispatch();

  const { cartId, shoppingCart } = useAppSelector(
    (state) => state.shoppingCart,
  );

  const addToCart = (
    product: Product,
    cartId: string | undefined,
    shoppingCart: ShoppingCart | null,
  ) => {
    const saveProduct = () => {
      const dataProduct: SaveShoppingCartItemsRequest = {
        orderItems: [
          {
            id: product.productId,
            quantity: 1,
          },
        ],
      };

      dispatchMinicartSimulateAddProductEvent({ ...product });
      dispatch(
        saveItemsShoppingCart({
          data: dataProduct,
          cartId: cartId!,
          quantity: 1,
          productReferenceId: product.productReference,
        }),
      );
    };

    const setProduct = (productInCart: { index: number; quantity: number }) => {
      const dataProduct: SetShoppingCartItemsRequest = {
        orderItems: [
          {
            quantity: productInCart.quantity,
            index: productInCart.index,
          },
        ],
      };

      dispatchMinicartSimulateAddProductEvent({ ...product });
      dispatch(
        setItemsShoppingCart({
          data: dataProduct,
          cartId: cartId!,
          quantity: productInCart.quantity,
        }),
      );
    };

    const existInCart = () => {
      if (!shoppingCart || shoppingCart?.items?.length === 0)
        return { value: false, quantity: 1, index: 0 };

      const productInCart = shoppingCart?.items?.find(
        (item: Item) => item.product.id === product.productId,
      );
      const productIndex = shoppingCart?.items?.findIndex(
        (item: Item) => item.product.id === product.productId,
      );
      if (productInCart)
        return {
          value: true,
          quantity: productInCart.quantity + 1 || 1,
          index: productIndex,
        };
      return { value: false, quantity: 1, index: 0 };
    };
    if (!existInCart()?.value) return saveProduct();
    if (existInCart()?.value) return setProduct(existInCart());
  };
  return (
    <ButtonContainer>
      <AddToCartButton onClick={() => addToCart(product, cartId, shoppingCart)}>
        Añadir al carrito
      </AddToCartButton>
    </ButtonContainer>
  );
};

export default ButtonAddToCart;
