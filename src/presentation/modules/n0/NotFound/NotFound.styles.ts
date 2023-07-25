import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 1rem auto;
  width: 100%;
  max-width: 77.25rem;

  @media (max-width: 77.25rem) {
    padding: 0 1rem;
  }

  img{
    width: 100%;
    height: auto;
  }
`;

export const TitleNotFound = styled.p`
  width: 100%;
  font-size: 22px;
  font-weight: 500;
  color: #1a1a1a;
  line-height: 1.5;
  margin: 10px 0;
  text-align: center;

  span {
    color: #cc1414;
    font-weight: 700;
  }

  @media (max-width: 1024px) {
    font-size: 18px;
  }

  @media (max-width: 770px) {
    font-size: 14px;
    padding: 10px 20px;
  }
`;

export const SubTitleNotFound = styled.p`
  width: 100%;
  text-align: center;
  font-size: 15px;
  font-weight: 400;
  color: #4d4d4d;
  margin-bottom: 30px;

  @media (max-width: 1024px) {
    font-size: 14px;
  }

  @media (max-width: 770px) {
    padding: 10px 20px;
  }
`;

export const TitleCarrousel = styled.p`
  width: 100%;
  text-align: center;
  font-size: 18px;
  color: #1a1a1a;
  font-weight: 700;
  line-height: 1.5;
  margin: 4px 0;

  @media (max-width: 1024px) {
    font-size: 16px;
  }

  @media (max-width: 770px) {
    font-size: 14px;
  }
`;
