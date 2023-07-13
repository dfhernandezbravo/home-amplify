import { environments } from '@/domain/env/environments';
import { saveItemsShoppingCart , setItemsShoppingCart } from '@/domain/use-cases/shopping-cart/save-items';
import {
  useAppDispatch,
  useAppSelector,
} from '@/presentation/hooks/storeHooks';
import useBreakpoints from '@/presentation/hooks/useBreakpoints';
import { ProductModel } from '@/presentation/store/products/product.type';
import { useEffect, useState } from 'react';
import ImageContainer from './Components/ImageContainer';
import ProductPrice from './Components/ProductPrice';
import {
  AddButton,
  AddToCartContainer,
  Description,
  ProductCardContainer,
  Ribbon,
  StyledLink,
  Title,
} from './ProductCard.styles';
import { ProductCardStruct } from './ProductCard.types';

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
  const dispatch = useAppDispatch();
  const { cartId, shoppingCart } = useAppSelector((state) => state.shoppingCart);

  const sliceDescription = (description: string) => {
    if (isSm && description.length > 50) return description.slice(0, 50);
    if (isXs && description.length > 35) return description.slice(0, 35);
    return description;
  };

  const addToCart = (product: ProductModel) => {


    const saveProduct = () => {
      const dataProduct: SaveShoppingCartItemsRequest = {
        orderItems: [
          {
            id: product.productId,
            quantity: 1,
          },
        ],
      };
  
      dispatch(saveItemsShoppingCart({ data: dataProduct, cartId: cartId!, quantity: 1 }));
    };

    const setProduct = (productInCart:{ index: number, quantity: number}) => {
      const dataProduct: SetShoppingCartItemsRequest = {
        orderItems: [
          {
            quantity: productInCart.quantity,
            index: productInCart.index
          },
        ],
      };  
      dispatch(setItemsShoppingCart({ data: dataProduct, cartId: cartId! , quantity: productInCart.quantity}));
    };

    const existInCart = () => {
      if(!shoppingCart || shoppingCart?.items?.length === 0) return { value: false, quantity: 1, index: 0 }

      const productInCart =  shoppingCart?.items?.find((item: any) =>  item.product.id === product.productId );
      const productIndex =  shoppingCart?.items?.findIndex((item: any) =>  item.product.id === product.productId );
      if(productInCart) return { value: true , quantity:  productInCart.quantity + 1 || 1, index: productIndex}
      return { value: false , quantity: 1, index: 0}
    }
    if(!existInCart()?.value) return saveProduct()
    if(existInCart()?.value) return setProduct(existInCart())
    
  };

  useEffect(() => {
    // Setting higlights
    setProductHighligts(Object.values(product?.clusterHighlights));

    // Setting price
    if (product?.items?.[0]?.sellers?.[0]?.commertialOffer) {
      setPrice(product?.items?.[0]?.sellers?.[0]?.commertialOffer?.Price);
      setOldPrice(
        product?.items?.[0]?.sellers?.[0]?.commertialOffer?.ListPrice,
      );
    }

    // Setting Description
    if (product?.items?.[0].name) {
      setDescription(product?.items?.[0].name);
    }
  }, []);

  return (
    <ProductCardContainer>
      {productHighligts?.length ? (
        <Ribbon>{productHighligts[productHighligts.length - 1]}</Ribbon>
      ) : null}
      <StyledLink
        href={`${environments().hostUrlRedirect}/${product?.linkText}/p`}
      >
        <ImageContainer
          imagePrimary={product.items?.[0].images?.[0]?.imageUrl}
          imageSecondary={product.items?.[0].images?.[1]?.imageUrl}
          alt={`${product.brand} picture`}
        />
        <div>
          <Title>{product.brand.slice(0, 30)}</Title>
          {description && (
            <Description>{sliceDescription(description)}</Description>
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