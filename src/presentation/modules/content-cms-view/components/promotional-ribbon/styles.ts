import Image from 'next/image';
import Link from 'next/link';
import styled, { css } from 'styled-components';

export const Container = styled(Link)<{
  background: string;
  $fullwidth: boolean;
}>`
  width: ${(props) => (props.$fullwidth ? '100%' : '77.25rem')};
  margin: 0 auto;
  height: fit-content;
  min-height: 40px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.background};

  @media (max-width: 1236px) {
    width: 100%;
  }
`;

export const ImageRibbon = styled(Image)<{
  $isloaded: boolean;
}>`
  width: 100%;
  height: auto;
  position: relative;

  ${(props) =>
    !props.$isloaded &&
    css`
      width: 0;
      height: 0;
    `}
`;
