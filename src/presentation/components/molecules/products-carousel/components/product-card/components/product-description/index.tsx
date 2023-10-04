import React from 'react';
import { Brand, Name, ProductDescriptionContainer } from './styles';

interface Props {
  brand: string;
  name: string;
}

const ProductDescription = ({ brand, name }: Props) => {
  return (
    <ProductDescriptionContainer>
      <Brand>{brand}</Brand>
      <Name>{name}</Name>
    </ProductDescriptionContainer>
  );
};

export default ProductDescription;
