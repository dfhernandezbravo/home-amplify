import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 4.5;

  @media (max-width: 640px) {
    flex-direction: column;
    justify-content: center;
    padding: 0 1rem;
  }
`;
