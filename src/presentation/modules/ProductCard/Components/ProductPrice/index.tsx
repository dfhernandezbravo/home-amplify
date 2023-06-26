import React from 'react';
import {
  Container,
  OldPrice,
  DiscountPercentage,
  Price,
  Row,
} from './ProductPrice.style';

type Props = {
  price: number;
  oldPrice: number;
};

const ProductPrice = (props: Props) => {
  const { price, oldPrice } = props;

  const formatPrice = (num: number) => {
    return (num / 1000).toFixed(3);
  };

  const calculateDiscount = () => {
    const discountPercentage = (100 - (price * 100) / oldPrice).toFixed();
    return discountPercentage;
  };

  return (
    <Container>
      <Row>
        {price && <Price>${formatPrice(price)}</Price>}
        {price && oldPrice && price !== oldPrice && (
          <DiscountPercentage>{calculateDiscount()}%</DiscountPercentage>
        )}
      </Row>
      <OldPrice>
        {price &&
          oldPrice &&
          price !== oldPrice &&
          `Normal: $${formatPrice(oldPrice)}`}
      </OldPrice>
    </Container>
  );
};

export default ProductPrice;
