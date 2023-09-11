import Image from 'next/image';
import styled from 'styled-components';

// -> remover marin-bottom -4px;

const Container = styled.section<{ background: string }>`
  width: 100%;
  height: fit-content;
  cursor: pointer;
  display: flex;
  justify-content: center;
  min-height: 40px;
  background-color: ${(props) => props.background};
`;

export const ImageRibbonContainer = styled.div<{ fullWidth: boolean }>`
  width: ${(props) => (props.fullWidth ? '100%' : '77rem')};
  height: 100%;
  position: relative;
`;

export const ImageRibbon = styled.img`
  width: 100%;
  height: 100%;
`;

export default Container;
