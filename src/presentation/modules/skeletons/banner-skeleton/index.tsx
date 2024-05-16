import React from 'react';
import { SkeletonContainer } from './style';
import { Skeleton } from '@/presentation/components/atoms/skeleton';

const BannerSkeleton = () => {
  return (
    <SkeletonContainer>
      <Skeleton animationtype="wave" height="300px" />
    </SkeletonContainer>
  );
};

export default BannerSkeleton;
