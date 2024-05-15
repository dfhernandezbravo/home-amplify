import styled, { css } from 'styled-components';

const GridTemplate = css`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 1fr);
  grid-gap: ${(props) => props.theme.spacing[50]};
  width: 100%;

  .main-grid {
    grid-column-start: 1;
    grid-row-start: 1;
    grid-row-end: 3;
  }
`;

const FlexTemplate = css`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const CardElementContainer = styled.div<{ width: string }>`
  width: ${({ width }) => (width === '25' ? '50%' : '100%')};
`;

export const CardMobileContainer = styled.div<{ $hasMultipleRows: boolean }>`
  ${(props) => (props.$hasMultipleRows ? GridTemplate : FlexTemplate)}
`;
