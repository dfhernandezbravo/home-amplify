import Image from 'next/image';
import Link from 'next/link';
import styled, { css } from 'styled-components';

const ContainerGrid = css`
  width: 100%;
  height: 100%;
`;

const ContainerFlex = css<{ width: number }>`
  height: 100%;
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
interface BoxContainerProps {
  $isInSwiper?: boolean;
  width: number;
}
export const BoxContainer = styled.div<BoxContainerProps>`
  width: 100%;
  height: 100%;
  padding: ${(props) => (props.$isInSwiper ? '0' : '5px')};
  @media (min-width: 1024px) {
    padding: 0;
    width: ${(props) => (props.width === 25 ? '50%' : '100%')};
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 8px;
  background-color: white;
  transition: transform 0.1s ease, filter 0.1s ease;
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 8px;
    transition: border-color 0.1s ease;
    pointer-events: none;
  }

  &::before {
    border: 8px solid transparent;
    z-index: -1;
  }

  &::after {
    width: 100%;
    height: 100%;
    border: 8px solid transparent;
    background: transparent;
    filter: blur(8px);
    margin: -8px;
  }

  @media (min-width: 641px) {
    ${BoxContainer}:hover &::before {
      border-color: white;
      z-index: 1;
    }

    ${BoxContainer}:hover & {
      transform: scale(0.97);
      box-shadow: 0 1px 8px rgba(100, 100, 100, 0.2);
    }
  }
`;
export const ImageCard = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  transition: filter 0.1s ease;

  @media (min-width: 641px) {
    ${BoxContainer}:hover & {
      filter: brightness(80%);
    }
  }
`;
