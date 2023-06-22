import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 77.25rem;
  margin: 1rem auto;
  height: fit-content;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    background-color: #fafafa;
  }

  @media (max-width: 768px) {
    display: block;
  }

  .carousel__slide {
    padding: 0 !important;
  }
`;

export const ItemContainer = styled.div`
  width: 25%;
  padding: 0.5rem;
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    background-color: #fafafa;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 384px;
    align-self: center;
  }

  &:hover {
    img {
      padding: 12px;
      box-shadow: 0 1px 8px rgba(100, 100, 100, 0.1);
    }
  }
`;