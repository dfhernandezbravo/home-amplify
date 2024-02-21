import Image from 'next/image';
import Link from 'next/link';
import styled, { css } from 'styled-components';

const ContainerGrid = css`
  width: 100%;
  height: 100%;
`;

const ContainerFlex = css<{ width: number }>`
  @media (max-width: 1025px) {
  }
`;

export const ContainerCard = styled.div<{
  hasmultiplerows: string;
  width: number;
}>`
  ${({ hasmultiplerows }) =>
    hasmultiplerows === 'true' ? ContainerGrid : ContainerFlex}
`;

export const LinkCard = styled(Link)`
  width: 100%;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const ImageCard = styled(Image)`
  width: 100%;
  height: 100%;
  padding: 5px;
  border-radius: 8px;

  &:hover {
    filter: brightness(80%);
  }

  @media (min-width: 1024px) {
    padding: 0.5rem;
    &:hover {
      transform: scale(0.95);
      box-shadow: 0 1px 8px rgba(100, 100, 100, 0.2);
    }
  }
`;
