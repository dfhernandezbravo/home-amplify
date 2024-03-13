import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 10px;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const SelectContainer = styled.div`
  width: 250px;
  border: 2px solid #b4c2cb;
  border-radius: 5px;
  height: 52px;

  @media only screen and (max-width: 768px) {
    max-width: 300px;
    width: 100%;
  }
`;
