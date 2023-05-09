import styled, { css } from "styled-components";

type ItemProps = {
  width: string;
  carouselMode?: boolean;
};

type ItemsProps = {
  carouselMode?: boolean;
};

type ButtonProps = {
  disabled: boolean;
};

export const GalleryContainer = styled.div<ItemsProps>`
  padding: 0 1rem;
  margin: 1rem ${(props) => (props.carouselMode ? "6rem" : "4rem")};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: ${(props) => (props.carouselMode ? "#fff" : "transparent")};
  position: relative;
  border-left-style: ${(props) =>
    props.carouselMode ? "0.5px solid #eaeaea" : "none"};
  border-right-style: ${(props) =>
    props.carouselMode ? "0.5px solid #eaeaea" : "none"};
  border-radius: 8px;
`;

export const GalleryItemContainer = styled.div<ItemProps>`
  max-height: 420px;
  filter: brightness(80%);
  width: ${(props) => props.width};
  padding: ${(props) => (props.carouselMode ? "1.5rem 2rem" : "0.5rem")};
  cursor: pointer;
  border: ${(props) => (props.carouselMode ? "0.5px solid #eaeaea" : "none")};

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

  svg polyline {
    stroke: ${(props) => (props.disabled ? "lightGray" : "black")};
  }
`;
