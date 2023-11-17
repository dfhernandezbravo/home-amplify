import { Product } from '@/domain/entities/products/product.type';
import ProductCampaigns from './components/product-campaigns';
// import ProductHeader from './components/product-header';
import ButtonAddToCart from './components/button-add-to-cart';
import ProductDescription from './components/product-description';
import ProductImage from './components/product-image';
import ProductLogistic from './components/product-logistic';
import ProductPrice from './components/product-price';
import ProductPromotions from './components/product-promotions';
import ProductTypeSend from './components/product-type-send';
import ProductWishList from './components/product-wishlist';
import {
  CampaignContainer,
  HeaderContainer,
  ProductContainer,
  PromotionContainer,
} from './styles';

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <ProductContainer>
      {/* <ProductHeader /> */}
      <HeaderContainer>
        <CampaignContainer>
          <ProductCampaigns />
          <ProductTypeSend />
        </CampaignContainer>
        <ProductWishList />
      </HeaderContainer>

      <ProductImage imageUrl={product?.imageUrl}>
        <PromotionContainer>
          <ProductPromotions />
        </PromotionContainer>
      </ProductImage>

      <ProductDescription name={product.productName} brand={product.brand} />

      <ProductPrice
        price={product?.prices?.offerPrice ?? product?.prices?.brandPrice}
        oldPrice={product?.prices?.normalPrice}
      />

      <ProductLogistic />
      <ButtonAddToCart product={product} />
    </ProductContainer>
  );
};

export default ProductCard;
