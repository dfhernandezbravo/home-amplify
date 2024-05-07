import styled from 'styled-components';

export const Subtitle = styled.h3`
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  margin: 3px 0 16px;
  padding: 16px 200px;

  @media (max-width: 640px) {
    font-size: 14px;
    padding: 16px 60px;
  }
`;

export const Wrapper = styled.div<{
  $itemsPerRow: number;
}>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.$itemsPerRow}, 1fr);
  gap: 2rem;
  padding: 0 0.5rem;
  align-items: baseline;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;
  }
`;
