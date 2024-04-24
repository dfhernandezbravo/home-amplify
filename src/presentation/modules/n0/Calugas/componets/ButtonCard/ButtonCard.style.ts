import styled from 'styled-components';

export const Wrapper = styled.div<{
  columns: number;
  width: number;
}>`
  display: grid;
  gap: 10px;
  width: ${(props) => props.width}%;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  align-items: center;
  padding: 0 16px;
  align-self: normal;

  @media (max-width: 640px) {
    width: 100%;
    margin-bottom: 1rem;
  }
`;
