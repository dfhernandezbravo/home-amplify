import styled, { css } from 'styled-components';

const GridTemplate = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  grid-gap: 1.3rem;
  width: 100%;

  .main {
    grid-column-start: 1;
    grid-row-start: 1;
    grid-row-end: 3;
  }
`;

const FlexTemplate = css`
  width: 100%;
  display: flex;
  gap: 1.3rem;
`;

export const ItemContainer = styled.div<{ width: number }>`
  width: ${(props) => `${props.width}%`};
`;

export const CardDesktopContainer = styled.div<{ hasmultiplerows: string }>`
  ${(props) => (props.hasmultiplerows === 'true' ? GridTemplate : FlexTemplate)}
`;
