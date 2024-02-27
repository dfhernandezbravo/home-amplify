import styled from 'styled-components';
const BaseContainer = styled.div`
  overflow: hidden;
  display: block;
`;

interface SkeletonContainerProps {
  $width?: number | string;
  $height?: number;
  $margin?: string;
  $border?: string;
}

export const SkeletonContainer = styled(BaseContainer)<SkeletonContainerProps>`
  width: ${(props) => `${props.$width}px` || '100%'};
  height: ${(props) => `${props.$height}px` || '100px'};
  margin: ${(props) => props.$margin || '0px'};
  border: ${(props) => props.$border || 'none'};
`;
