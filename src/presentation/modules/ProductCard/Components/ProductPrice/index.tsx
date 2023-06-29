import React from 'react';
import {
  Container,
  OldPrice,
  DiscountPercentage,
  Price,
  Row,
} from './ProductPrice.style';
import { calculateDiscount, formatPrice } from '@/presentation/hooks/utils';

type Props = {
  price: number;
  oldPrice: number;
};

const ProductPrice = (props: Props) => {
  const { price, oldPrice } = props;

  const haveDiscount = ()=>{
    return price && oldPrice && price !== oldPrice;
  }

  return (
    <Container>
      <Row>
        {price && <Price>${formatPrice(price)}</Price>}
        {haveDiscount() && 
          <DiscountPercentage>
            {calculateDiscount(price, oldPrice)}%
          </DiscountPercentage>
        }
      </Row>
      <OldPrice>
        {haveDiscount() && `Normal: $${formatPrice(oldPrice)}`}
      </OldPrice>
    </Container>
  );
};

export default ProductPrice;
