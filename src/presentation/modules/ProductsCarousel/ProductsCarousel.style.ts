import styled, { css } from 'styled-components';

type CarouselNavButtonProps = {
  disabled?: boolean;
  right?: boolean;
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

  ${(props) =>
    props.right === true
      ? css`
          right: -3rem;
        `
      : css`
          left: -3rem;
        `};

  @media (max-width: 1400px) {
    background: #fff;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
    top: 40%;
    height: 44px;

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
      height: auto;
    }
  }
`;
