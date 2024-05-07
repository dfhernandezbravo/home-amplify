import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: normal;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 640px) {
    max-width: 80%;
    margin: 0 auto;
    padding: 0 2rem;
  }

  @media (max-width: 450px) {
    max-width: 100%;
    padding: 0 1rem;
  }
`;

export const Subtitle = styled.h3`
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  margin: 3px 0 16px;
  padding: 16px 100px;

  @media (max-width: 640px) {
    font-size: 14px;
    padding: 16px 60px;
  }
`;
