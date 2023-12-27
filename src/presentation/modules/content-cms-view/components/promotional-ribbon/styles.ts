import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

// -> remover marin-bottom -4px;

export const Container = styled(Link)<{ background: string }>`
  width: 100%;
  height: fit-content;
  min-height: 40px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.background};
  margin: 0;
`;

export const ImageRibbon = styled(Image)<{ fullWidth: boolean }>`
  width: ${(props) => (props.fullWidth ? '100%' : 'fit-content')};
  position: relative;
  height: auto;
  min-height: 40px;
`;
