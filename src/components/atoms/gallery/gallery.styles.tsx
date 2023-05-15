import styled, { css } from 'styled-components';

type ItemProps = {
  width: string;
  carouselMode?: boolean;
  index?: number;
};

type ItemsProps = {
  carouselMode?: boolean;
};

type ButtonProps = {
  disabled: boolean;
};

export const GalleryContainer = styled.div<ItemsProps>`
  max-width: 80rem;
  margin: 1rem auto;
  border-radius: 8px;
  position: relative;
  height: fit-content;
  background-color: #fff;

  ${(props) =>
    props.carouselMode &&
    css`
      max-width: 95vw;
    `}
`;

export const ItemsContainer = styled.div<ItemsProps>`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  ${(props) =>
    props.carouselMode &&
    css`
      border-radius: 8px;
      overflow: hidden;
      border: 1px solid #eaeaea;
    `}
`;

export const GalleryItemContainer = styled.div<ItemProps>`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: ${(props) => (props.carouselMode ? '165px' : 'auto')};
  max-height: 420px;
  width: ${(props) => props.width};
  padding: ${(props) => (props.carouselMode ? '1rem 0.5rem' : '0.5rem')};
  cursor: pointer;
  border-left: ${(props) =>
    props.carouselMode && props.index !== 0 ? '1px solid #eaeaea' : 'none'};

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: #000;
    height: fit-content;
  }

  @media only screen and (max-width: 1024px) {
    ${(props) =>
      props.carouselMode &&
      css`
        width: ${parseFloat(props.width) * 2}%;
      `}
  }

  &:hover {
    ${(props) =>
      props.carouselMode &&
      css`
        background-color: #cc1515;
        a {
          color: #fff;
        }

        img {
          fill: #fff;
          filter: brightness(0) grayscale(0) invert(100%);
        }
      `}
  }

  img {
    max-width: 100%;
    border-radius: 12px;

    &:hover {
      ${(props) =>
        !props.carouselMode &&
        css`
          padding: 8px;
        `}
    }
  }
`;

export const GalleryItemText = styled.div`
  font-size: 1rem;
  margin: 0 auto;
  width: 100%;
  text-align: center;
`;

export const GalleryButton = styled.button<ButtonProps>`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  position: absolute;
  background-color: #fff;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  padding: 0.5rem 0.4rem;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
  z-index: 9;
  bottom: 36%;

  &[aria-label='go-previous'] {
    left: -1.1rem;
  }

  &[aria-label='go-next'] {
    right: -1.1rem;
  }

  @media only screen and (max-width: 1024px) {
    bottom: 42.5%;

    &[aria-label='go-previous'] {
      left: -0.5rem;
    }

    &[aria-label='go-next'] {
      right: -0.5rem;
    }
  }

  svg polyline {
    stroke: ${(props) => (props.disabled ? 'lightGray' : 'black')};
  }
`;
