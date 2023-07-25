import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 0 auto;
`;

export const Card = styled.div`
  display: flex;
  justify-content: center;
  height: fit-content;

  img {
    max-width: 220px;
    height: auto;
  }
`;
