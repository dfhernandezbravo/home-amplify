import styled from 'styled-components';

export const Wrapper = styled.div<{
  bgColor: string;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.bgColor};
  text-align: center;
  margin: 50px 0px;

  @media (max-width: 800px) {
    width: 100%;
    margin-bottom: 0px;

    &:last-child {
      margin-bottom: 50px;
    }
  }
`;

export const Title = styled.p<{
  fontSize: string;
}>`
  color: #000;
  font-size: ${(props) => `${props.fontSize}px`};
  font-weight: 700;
  margin-bottom: 10px;
`;

export const Icon = styled.div`
  width: 90px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;

  img {
    width: 100%;
    height: auto;
  }
`;
