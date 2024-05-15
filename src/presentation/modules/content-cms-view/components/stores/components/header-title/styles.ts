import styled from 'styled-components';

export const WrapperTitle = styled.div`
  color: #363f45;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 768px) {
    text-align: center;
    max-width: 250px;
    flex-wrap: wrap;
    margin: 0 auto 16px auto;
  }
`;
export const Title = styled.p`
  font-size: 18px;
  font-weight: 700;
`;

export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
`;
