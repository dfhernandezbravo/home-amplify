import styled, { css } from 'styled-components';

type ItemProps = {
  width: string;
  carouselMode?: boolean;
  index?: number;
};

type ItemsProps = {
  carouselMode?: boolean;
};


export const GalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 77.25rem;
  margin: 1rem;
  height: fit-content;

  @media (max-width: 768px){
    flex-direction: column;
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    background-color: #fafafa;
  }
`;

export const GalleryItemContainer = styled.div`
  width: 25%;
  padding: 0.5rem;
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    background-color: #fafafa;
  }

  @media (max-width: 768px){
    max-height: 420px;
    width: 100%;
    max-width: 384px;
    align-self: center;
  }

  &:hover{
    img{
      padding: 12px;
      box-shadow: 0 1px 8px rgba(100, 100, 100, 0.1);
    }
  }
`;
