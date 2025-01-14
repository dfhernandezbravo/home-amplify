import styled, { css } from 'styled-components';

type WrapperStruct = {
  direction?: string;
};

export const Wrapper = styled.div<WrapperStruct>`
  display: flex;
  justify-content: flex-start;
  ${(props) =>
    props.direction === 'row'
      ? css`
          flex-direction: row;
          gap: ${({ theme: { spacing } }) => spacing[50]};
        `
      : css`
          flex-direction: column;
          justify-content: flex-start;
        `};

  margin: 1rem auto;
  width: 100%;
  max-width: 77.25rem;

  @media (max-width: 77.25rem) {
    padding: 0 1rem;
  }
`;
