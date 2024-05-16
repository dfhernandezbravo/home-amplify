import React from 'react';
import {
  CardBodySkeleton,
  Container,
  ImageSkeleton,
  ProductSkeletonCard,
} from './style';
import useBreakpoints from '@/presentation/hooks/useBreakpoints';
import { Skeleton } from '@/presentation/components/atoms/skeleton';

const ProductsCarouselSkeleton = () => {
  const { isSm, isXs, isMd } = useBreakpoints();

  return (
    <Container>
      {[...Array(isXs ? 2 : isSm ? 3 : isMd ? 4 : 5)].map((product, i) => (
        <ProductSkeletonCard key={`product-skeleton-${i}`}>
          <ImageSkeleton>
            <Skeleton animationtype="wave" width="100%" height="300px" />
          </ImageSkeleton>
          <CardBodySkeleton>
            <Skeleton animationtype="wave" height="10px" width="40%" />
            <Skeleton animationtype="wave" height="20px" width="50%" />
            <Skeleton animationtype="wave" height="30px" width="65%" />
            <Skeleton animationtype="wave" height="30px" width="25%" />
            <Skeleton animationtype="wave" height="45px" radius="0.5rem" />
          </CardBodySkeleton>
        </ProductSkeletonCard>
      ))}
    </Container>
  );
};

export default ProductsCarouselSkeleton;
