import React, { FC } from 'react';
import { SkeletonContainer } from './CustomSkeleton.styles';
import { Skeleton } from '@/presentation/components/atoms/skeleton';

const CustomSkeleton: FC<{
  $width?: number | string;
  $height?: number;
  $margin?: string;
  $border?: string;
}> = ({ ...props }) => (
  <SkeletonContainer {...props}>
    <Skeleton />
  </SkeletonContainer>
);

export default CustomSkeleton;
