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
  width: 350px;
  border: 1px solid #b4c2cb;
  border-radius: 8px;
  height: 48px;
`;
