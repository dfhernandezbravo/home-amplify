import Image from 'next/image';
import styled, { css } from 'styled-components';

type ContainerWidth = {
    width?: string;
}

export const CalugaContainer = styled.div<ContainerWidth>`
    display: flex;
    width: ${(props) => (props?.width ? props?.width : '50%')};

  @media (max-width: 768px) {
    ${(props) =>
    props?.width === '25%'
      ? css`
          width: 50%;
        `
      : css`
          width: 100%;
        `};
        
  }
`;

export const  ImageCaluga = styled(Image)`
    width: 100%;
    height: auto;
    padding: .5rem;
`;