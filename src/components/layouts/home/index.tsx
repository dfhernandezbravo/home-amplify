import React, { useEffect } from 'react';
import { CartItemModel } from '@/store/cart/cart.type';
import ProductCard from '@/components/molecules/productCard';
import cartSlice from '@/store/cart';
import { getProducts } from '@/store/products';
import { HomeContainer, ProductsList } from './home.styles';
import { useAppDispatch, useAppSelector } from '@/hooks/storeHooks';

const Home = () => {

  const dispatch = useAppDispatch();
  const { products, loadingProducts } = useAppSelector((state) => state.products);
  const { cart } = useAppSelector((state) => state.cart);

  const { setAddProductInCart, setRemoveProductInCart } = cartSlice?.actions;

  useEffect(() => {
    !products?.length && dispatch(getProducts())
  },[])

  return(
    <HomeContainer>
      <ProductsList>
        {!loadingProducts && products && products.map((product: CartItemModel) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            cart={cart} 
            onAddToCart={(product: CartItemModel) => {
              dispatch(setAddProductInCart(product));
            }} 
            onDeleteFromCart={(product: CartItemModel) => {
              dispatch(setRemoveProductInCart(product));
            }}
          />
        ))}
      </ProductsList>
    </HomeContainer>
  );
};
export default Home;