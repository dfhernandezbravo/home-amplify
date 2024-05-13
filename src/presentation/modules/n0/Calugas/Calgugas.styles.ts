import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: normal;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 640px) {
    padding: 0 1rem;
  }
`;

export const Subtitle = styled.h3`
  font-family: OpenSans;
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
