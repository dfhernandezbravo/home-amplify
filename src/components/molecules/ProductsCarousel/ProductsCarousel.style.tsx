import styled from 'styled-components';

type CarouselNavButtonProps = {
  disabled?: boolean;
};

export const CarouselContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 95%;
`;

export const CarouselNavButton = styled.div<CarouselNavButtonProps>`
  position: absolute;
  top: 45%;
  transform: translateY(-50%);
  width: 30px;
  height: 44px;
  outline: none;
  border: none;
  background: #fff;
  cursor: pointer;
  color: #000;
  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.1);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0;
  padding-top: 0;
  border-radius: 4px;

  & > svg > polyline {
    stroke: #990707;
  }

  &:hover {
    background-color: #fff;
    border: 1px solid #990707;
  }
`;
