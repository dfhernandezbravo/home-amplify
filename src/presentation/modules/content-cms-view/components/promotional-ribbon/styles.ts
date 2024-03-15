import Image from 'next/image';
import Link from 'next/link';
import styled, { css } from 'styled-components';

export const Container = styled(Link)<{
  background: string;
  fullwidth: string;
}>`
  width: ${(props) => (props.fullwidth === 'true' ? '100%' : '77.25rem')};
  margin: 0 auto;
  height: fit-content;
  min-height: 40px;
  max-height: 40px;
  max-width: 2060px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.background};
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
