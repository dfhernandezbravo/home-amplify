import { Slider } from 'pure-react-carousel';
import styled, { css } from 'styled-components';

type ButtonProps = {
  right?: boolean;
};

export const ItemsWrapper = styled.section`
  width: 100%;
  margin-bottom: 3rem;
  position: relative;
`;

export const CustomSlider = styled(Slider)`
  max-height: 170px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 1024px) {
    min-height: 296px;

    .carousel__slider--horizontal {
      height: 296px;
    }
  }
`;

export const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    height: 11px;
    border: none;
    margin: 0 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background-color: #aeaeae;
  }

  .carousel__dot--selected {
    width: 59px;
    height: 11px;
    border-radius: 8px;
    border-style: inset;
    border: 1.9px solid #cc1515;
    background-color: #cc1515;
  }

  @media (max-width: 1024px) {
    margin-top: 40px;
  }
`;

export const Dots = styled.div`
  width: 22px;
  height: 11px;
  margin-bottom: 2rem;
`;

export const CarouselNavButton = styled.div<ButtonProps>`
  position: absolute;
  top: 35%;
  transform: translateY(-50%);
  width: 42px;
  height: 52px;
  outline: none;
  border: none;
  background: #fff;
  cursor: pointer;
  border-radius: 8px;
  color: #000;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0;
  padding-top: 0;

  &:hover {
    background-color: #fff;
  }

  ${(props) =>
    props.right === true
      ? css`
          right: -3rem;
        `
      : css`
          left: -3rem;
        `};

  @media (max-width: 1024px) {
    background: #fff;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
    top: 40%;
    ${(props) =>
      props.right === true
        ? css`
            right: -0.5rem;
          `
        : css`
            left: -0.5rem;
          `};

    svg {
      width: 25px;
      height: 30px;
    }
  }
`;
