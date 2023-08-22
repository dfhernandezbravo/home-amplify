import styled, { css } from 'styled-components';

export const ContainerSwiper = styled.div`
  max-width: 81rem;
  margin: auto;
  margin-bottom: 30px;
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-content: center;
`;

export const ItemContainer = styled.div`
  width: 100%;
  height: 165px;
  margin: 0;
  padding: 0;

  padding: 20px 20px 30px 20px;
  cursor: pointer;
  filter: none;
  background-color: #fff;
  border: 1px solid #eaeaea;

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
  width: 90px;
  height: 90px;
`;

export const ItemTitle = styled.h4`
  color: black;
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  margin-top: 8px;
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
  width: 52px;
  height: 52px;
  margin-top: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 8px;
  margin-left: 7px;
  margin-right: 7px;
  & > svg {
    width: 30px;
    height: 30px;
  }
`;

export const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0px;
  width: 500px;
  margin: 0 auto;
  border: 2px solid blue;
`;
export const ItemGrid = styled.div`
  width: 160px;
  height: 165px;
  margin: 0;
  padding: 0;
  padding: 20px 20px 30px 20px;
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
