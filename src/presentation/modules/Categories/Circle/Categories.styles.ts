import { Slide, Slider } from 'pure-react-carousel';
import styled, { css } from 'styled-components';

type ButtonProps = {
  right?: boolean;
};

export const ItemsWrapper = styled.section`
  width: 100%;
  height: 8rem;
  margin-bottom: 2rem;
  position: relative;

  a {
    text-decoration: none;
  }

  .carousel__inner-slide {
    display: flex;
    justify-content: center;
    padding-top: 0.2rem;
  }

  @media (max-width: 768px) {
    height: 100px;
  }
`;

export const CarouselImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  box-shadow: 0 2.26759px 6.80278px rgba(0, 0, 0, 0.25);

  @media (max-width: 768px) {
    width: 55px;
    height: 55px;
  }

  img {
    width: 62px;
    height: auto;

    @media (max-width: 768px) {
      width: 33px;
      height: auto;
    }
  }
`;

export const IconTitle = styled.p`
  display: block;
  font-size: 14px;
  color: #4d4d4d;
  font-weight: 400;
  margin-top: 0.5rem;
  height: 40px;
  max-width: 100px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 10px;
    margin-top: 3px;
    max-width: 60px;
  }
`;

export const CarouselNavButton = styled.div<ButtonProps>`
  position: absolute;
  top: 45%;
  transform: translateY(-50%);
  width: 32px;
  height: 44px;
  outline: none;
  border: none;
  background: hsla(0, 0%, 100%, 0.3);
  cursor: pointer;
  border-radius: 8px;
  color: #000;
  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.1);
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
          right: 1.5rem;
        `
      : css`
          left: 1.5rem;
        `};

  @media (max-width: 768px) {
    width: 14px;
    height: 24px;
    ${(props) =>
      props.right === true
        ? css`
            right: 1rem;
          `
        : css`
            left: 1rem;
          `};

    svg {
      width: 14px;
      height: 24px;
    }
  }
`;

export const CustomSlider = styled(Slider)`
  margin: 0 auto;
  width: 90%;
  min-height: 170px;
`;

export const CustomSlide = styled(Slide)`
  height: 20px;
`;
