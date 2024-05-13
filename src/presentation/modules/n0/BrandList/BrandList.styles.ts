import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 0 auto;
`;

export const Card = styled.div<{
  $shadow?: boolean;
  opacity?: string;
}>`
  display: flex;
  justify-content: center;
  height: fit-content;

  img {
    max-width: 220px;
    height: auto;
  }

  &:hover {
    opacity: ${({ opacity }) => (opacity ? opacity : '1')};
    box-shadow: ${({ $shadow }) =>
      $shadow ? `0px 0px 11px 0px rgba(43,43,43,0.2)` : 'none'};
  }
`;
