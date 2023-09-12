import { ProductAnalytics } from '@/domain/entities/analytics/analytics';
import { dispatchMinicartSimulateAddProductEvent } from '@/domain/use-cases/shopping-cart/dispatch-mini-cart-event';
import {
  saveItemsShoppingCart,
  setItemsShoppingCart,
} from '@/domain/use-cases/shopping-cart/save-items';
import {
  useAppDispatch,
  useAppSelector,
} from '@/presentation/hooks/storeHooks';
import useAnalytics from '@/presentation/hooks/useAnalytics';
import useBreakpoints from '@/presentation/hooks/useBreakpoints';
import useIsInViewport from '@/presentation/hooks/useIsInViewport';
import useLinks from '@/presentation/hooks/useLink';
import { Product } from '@/presentation/store/products/product.type';
import { useEffect, useRef, useState } from 'react';
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
  const { product, position = 1, handleProductImpression } = props;
  console.log(product);

  // State
  const [productHighligts, setProductHighligts] = useState<any[]>();
  const [price, setPrice] = useState(0);
  const [oldPrice, setOldPrice] = useState(0);
  const [description, setDescription] = useState('');

  // Hooks
  const { isSm, isXs } = useBreakpoints();
  const dispatch = useAppDispatch();
  const { cartId, shoppingCart } = useAppSelector(
    (state) => state.shoppingCart,
  );
  const { getLink, sendEvent } = useLinks();
  const {
    methods: { sendProductClickEvent },
  } = useAnalytics();
  const productRef = useRef<HTMLInputElement>(null);
  const { isIntersecting, observer } = useIsInViewport(productRef);

  const handleProductClick = (item: Product, type: string) => {
    const products: ProductAnalytics[] = [
      {
        name: item?.items?.[0].name || '',
        id: item?.items?.[0].referenceId?.[0].Value || '',
        price: item?.items?.[0].sellers?.[0].commertialOffer?.Price || 0,
        brand: item?.brand || '',
        category: item?.categories?.[0] || '',
        variant: item?.items?.[0].referenceId?.[0].Value || '',
        position: position,
        quantity: 1,
      },
    ];

    sendProductClickEvent({
      event: 'productClick',
      ecommerce: {
        tipoClic: type === 'add' ? 'add clic' : 'clic PDP',
        click: {
          actionField: { list: 'Recomendaciones: Home - Productos destacados' },
          products,
        },
        currencyCode: 'CLP',
      },
    });
  };

  const sliceDescription = (description: string) => {
    if (isSm && description.length > 50) return description.slice(0, 50);
    if (isXs && description.length > 35) return description.slice(0, 35);
    return description;
  };

  const checkRibbonText = (text: string) => {
    return text.slice(0, 3) === 'FV-' ? text.slice(3, text.length) : text;
  };

  const addToCart = (product: Product) => {
    // Evento para enviar producto a VTEX en modalidad hibrida
    if (typeof window !== 'undefined') {
      window.parent.postMessage({ ADD_TO_CART: product }, '*');
    }
    // Fin Evento Hibrido(VTEX)
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
      handleProductClick(product, 'add');
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
        (item: any) => item.product.id === product.productId,
      );
      const productIndex = shoppingCart?.items?.findIndex(
        (item: any) => item.product.id === product.productId,
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

  // Mark when product is visible
  useEffect(() => {
    if (isIntersecting) {
      handleProductImpression?.(product, position);
      if (productRef.current) {
        observer.unobserve(productRef.current);
      }
    }
  }, [isIntersecting]);

  return (
    <ProductCardContainer ref={productRef}>
      {productHighligts?.length ? (
        <Ribbon>
          {checkRibbonText(productHighligts[productHighligts.length - 1])}
        </Ribbon>
      ) : null}
      <StyledLink
        onClick={() => {
          handleProductClick(product, 'PDP');
          sendEvent(
            `${process.env.NEXT_PUBLIC_HOST_URL}/${product?.linkText}/p`,
          );
        }}
        href={getLink(
          `${process.env.NEXT_PUBLIC_HOST_URL}/${product?.linkText}/p`,
        )}
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
