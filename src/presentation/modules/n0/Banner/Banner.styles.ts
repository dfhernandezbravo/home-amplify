import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  font-size: 0;

  a {
    margin: 0;
    padding: 0;

    img {
      width: 100%;
      height: auto;
      cursor: pointer;
    }
  }
`;

export const TextWrapper = styled.div`
  position: absolute;
  right: 100px;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
  @media (max-width: 768px) {
    right: 50px;
  }
`;

export const Title = styled.h1`
  font-size: 4dvw;
  font-weight: 700;
  color: white;
`;

export const Subtitle = styled.p`
  font-size: 2dvw;
  font-weight: 400;
  color: white;
`;
