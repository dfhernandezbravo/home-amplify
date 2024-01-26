import styled from 'styled-components';

export const Container = styled.div`
  background-color: transparent;
  display: flex;
  max-width: 76.2rem;
  border-radius: 8px;
  margin: 30px auto;
  justify-content: center;
`;

export const ContentContainer = styled.div`
  width: 90%;
  background-color: #fff;
  display: flex;
  padding: 24px;
  flex-direction: column;
  & h3 {
    padding: 30px 0;
  }
`;
