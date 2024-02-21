import React, { FC } from 'react';
import { SkeletonContainer } from './CustomSkeleton.styles';
import { Skeleton } from '@cencosud-ds/easy-design-system';

const CustomSkeleton: FC<{
  $width?: number;
  $height?: number;
  $margin?: string;
  $border?: string;
}> = ({ ...props }) => (
  <SkeletonContainer {...props}>
    <Skeleton animation="wave" />
  </SkeletonContainer>
);

export default CustomSkeleton;
