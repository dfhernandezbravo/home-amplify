import React from 'react';
import {
  CardBodySkeleton,
  Container,
  ImageSkeleton,
  ProductSkeletonCard,
} from './style';
import useBreakpoints from '@/presentation/hooks/useBreakpoints';
import { Skeleton } from '@cencosud-ds/easy-design-system';

const ProductsCarouselSkeleton = () => {
  const { isSm, isXs, isMd } = useBreakpoints();

  return (
    <Container>
      {[...Array(isXs ? 2 : isSm ? 3 : isMd ? 4 : 5)].map((product, i) => (
        <ProductSkeletonCard key={`product-skeleton-${i}`}>
          <ImageSkeleton>
            <Skeleton animation="wave" width="100%" height="300px" />
          </ImageSkeleton>
          <CardBodySkeleton>
            <Skeleton animation="wave" height="10px" width="40%" />
            <Skeleton animation="wave" height="20px" width="50%" />
            <Skeleton animation="wave" height="30px" width="65%" />
            <Skeleton animation="wave" height="30px" width="25%" />
            <Skeleton animation="wave" height="45px" borderRadius="0.5rem" />
          </CardBodySkeleton>
        </ProductSkeletonCard>
      ))}
    </Container>
  );
};

export default ProductsCarouselSkeleton;
