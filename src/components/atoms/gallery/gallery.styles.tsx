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

  
  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    background-color: #fafafa;
  }

  @media (max-width: 768px){
    flex-direction: column;

  }

  .carousel__slide{
    padding: 0 !important;
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


export const CarouselDotContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1.5rem;

    button{
      height: 11px;
      border: none;
      margin: 0 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      background-color: #aeaeae;
    }

    .carousel__dot--selected{
        width: 59px;
        height: 11px;
        border-radius: 8px;
        border-style: inset;
        border: 1.9px solid #cc1515;
        background-color: #cc1515;
    }

`;

export const CarouselDot = styled.div`
    width: 22px;
    height: 11px;
    margin-bottom: 2rem;
`;

export const CarouselWrapper = styled.div`
  margin-bottom: 2rem;
`;