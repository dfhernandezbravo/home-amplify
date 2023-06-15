import styled from 'styled-components';

export const BottomCardsSection = styled.section`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  max-width: 80rem;
  margin: 0 auto;
  padding: 5rem 1rem 0 1rem;

  &[data-mobile='true'] {
    flex-direction: column;
  }
`;
