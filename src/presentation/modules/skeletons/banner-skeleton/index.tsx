import React from 'react';
import { SkeletonContainer } from './style';
import { Skeleton } from '@cencosud-ds/easy-design-system';

const BannerSkeleton = () => {
  return (
    <SkeletonContainer>
      <Skeleton animation="wave" height="300px" />
    </SkeletonContainer>
  );
};

export default BannerSkeleton;
