import styled, { css } from 'styled-components';

export const ContainerSwiper = styled.div`
  max-width: 82rem;
  margin: auto;
  margin-bottom: 1.875rem;
  margin-top: 0.9375rem;
  display: flex;
  justify-content: center;
  align-content: center;

  .swiper{
    overflow-x: hidden;

    .swiper-wrapper{
      max-width: 100%;
    }
  }
`;

export const ItemContainer = styled.div`
  width: 100%;
  height: 165px;
  margin: 0;
  padding: 1.25rem 1.25rem 1.875 1.25rem;
  cursor: pointer;
  filter: none;
  background-color: #fff;
  border: 1px solid #eaeaea;
  display: flex;
  flex-direction: column;
  justify-content: center;

  a {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }

  &:hover {
    background: #cc1515;
    & > a img {
      filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(2deg)
        brightness(109%) contrast(101%);
    }
    & > a h4 {
      color: #fff;
    }
  }
`;
export const ItemImage = styled.img`
  width: 5.625rem;
  height: 5.625rem;
`;

export const ItemTitle = styled.h4`
  color: black;
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  margin-top: 0.5rem;
`;

export const ArrowButton = styled.div<{ disabled: boolean }>`
  ${(props) =>
    props?.disabled
      ? css`
          color: rgba(16, 16, 16, 0.3);
        `
      : css`
          color: black;
        `};
  background: #fff;
  width: 3.25rem;
  height: 3.25rem;
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 0.5rem;
  margin-left: 7px;
  margin-right: 7px;
  & > svg {
    width: 1.875rem;
    height: 1.875rem;
  }
`;

export const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0px;
  width: 31.25rem;
  margin: 0 auto;
  border: 2px solid blue;
`;
export const ItemGrid = styled.div`
  width: 160px;
  height: 165px;
  margin: 0;
  padding: 0;
  padding: 1.25rem 1.25rem 1.875 1.25rem;
  cursor: pointer;
  filter: none;
  background-color: #fff;
  border: 1px solid #eaeaea;

  & > a {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }

  &:hover {
    background: #cc1515;
    & > a img {
      filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(2deg)
        brightness(109%) contrast(101%);
    }
    & > a h4 {
      color: #fff;
    }
  }
`;
