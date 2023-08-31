import styled, { css } from 'styled-components';

export const CarouselContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
`;

export const ArrowButton = styled.div<{ disabled: boolean; right: boolean }>`
  ${(props) =>
    props?.disabled
      ? css`
          color: rgba(16, 16, 16, 0.3);
        `
      : css`
          color: black;
        `};

  ${(props) =>
    props?.right
      ? css`
          right: -4rem;
        `
      : css`
          left: -4rem;
        `};

  background: #fff;
  position: absolute;
  top: 40%;
  transform: translateY(-50%);
  width: 42px;
  height: 52px;
  margin-top: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 8px;
  margin-left: 7px;
  margin-right: 7px;
  z-index: 2;
  & > svg {
    width: 30px;
    height: 30px;
  }

  @media (max-width: 1400px) {
    background: #fff;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
    top: 40%;

    ${(props) =>
      props.right === true
        ? css`
            right: -0.8rem;
          `
        : css`
            left: -0.8rem;
          `};
  }
`;
