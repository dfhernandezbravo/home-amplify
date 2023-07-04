import styled from 'styled-components';

type CarouselNavButtonProps = {
  disabled?: boolean;
};

export const CarouselContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
`;

export const CarouselNavButton = styled.div<CarouselNavButtonProps>`
  position: absolute;
  top: 45%;
  transform: translateY(-50%);
  width: 30px;
  height: 25px;
  outline: none;
  border: none;
  cursor: pointer;
  color: #000;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0;
  padding-top: 0;
  border-radius: 4px;

`;
