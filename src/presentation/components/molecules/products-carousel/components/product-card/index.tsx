import { Product } from '@/domain/entities/products/product.type';
import ProductCampaigns from './components/product-campaigns';
import ProductHeader from './components/product-header';
import ProductImage from './components/product-image';
import ProductPromotions from './components/product-promotions';
import ProductTypeSend from './components/product-type-send';
import {
  CampaignContainer,
  HeaderContainer,
  ProductContainer,
  PromotionContainer,
} from './styles';
import ProductWishList from './components/product-wishlist';
import ProductDescription from './components/product-description';
import ProductPrice from './components/product-price';

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <ProductContainer>
      <ProductHeader />

      <ProductImage images={product.items[0].images}>
        <HeaderContainer>
          <CampaignContainer>
            <ProductCampaigns />
            <ProductTypeSend />
          </CampaignContainer>
          <ProductWishList />
        </HeaderContainer>

        <PromotionContainer>
          <ProductPromotions />
        </PromotionContainer>
      </ProductImage>

      <ProductDescription name={product.productName} brand={product.brand} />

      <ProductPrice
        price={product.items[0].sellers[0].commertialOffer.Price}
        oldPrice={product.items[0].sellers[0].commertialOffer.ListPrice}
      />
    </ProductContainer>
  );
};

export default ProductCard;
