import styled, { css } from 'styled-components';

const GridTemplate = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  grid-gap: ${(props) => props.theme.spacing[50]};
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
  gap: ${(props) => props.theme.spacing[50]};
`;

export const ItemContainer = styled.div<{ width: number }>`
  width: ${(props) => (props.width === 25 ? '50%' : '100%')};
`;

export const CardDesktopContainer = styled.div<{ hasMultipleRows: boolean }>`
  ${(props) => (props.hasMultipleRows ? GridTemplate : FlexTemplate)}
`;
