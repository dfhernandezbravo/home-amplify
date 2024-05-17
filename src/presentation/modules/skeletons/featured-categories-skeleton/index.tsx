import React from 'react';
import { Container, SkeletonContainer } from './style';
import { Skeleton } from '@/presentation/components/atoms/Skeleton';

const FeaturedCategoriesSkeleton = () => {
  return (
    <Container>
      {[...Array(8)].map((caluga, i) => (
        <SkeletonContainer key={`gallery_item_${i}`}>
          <Skeleton height="500px" />
        </SkeletonContainer>
      ))}
    </Container>
  );
};

export default FeaturedCategoriesSkeleton;
