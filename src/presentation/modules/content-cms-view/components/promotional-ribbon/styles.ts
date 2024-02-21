import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled(Link)<{
  background: string;
  fullwidth: string;
}>`
  width: ${(props) => (props.fullwidth === 'true' ? '100%' : '77.25rem')};
  margin: 0 auto;
  height: auto;
  min-height: 40px;
  max-height: 200px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.background};
`;

export const ImageRibbon = styled(Image)`
  width: 100%;
  position: relative;
  height: auto;
  min-height: 40px;
`;
