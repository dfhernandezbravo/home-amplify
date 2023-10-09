import Image from 'next/image';
import styled from 'styled-components';

export const ProductImageContainer = styled.div`
  width: 100%;
  height: 155px;
  position: relative;
  display: flex;
  justify-content: center;
`;

export const ProductImageCard = styled(Image)`
  width: 100%;
  height: auto;
`;
