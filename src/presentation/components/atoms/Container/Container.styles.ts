import styled, { css } from 'styled-components';

type ContainerProps = {
  direction?: string;
};

export const Wrapper = styled.div<ContainerProps>`
  display: flex;
  ${(props) =>
    props.direction === 'row'
      ? css`
          flex-direction: row;
        `
      : css`
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
        `};

  margin: 1rem auto;
  width: 100%;
  max-width: 77.25rem;
`;
