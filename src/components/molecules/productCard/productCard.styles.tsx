import styled, { css } from "styled-components";

export const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 23%;
  border: 1px solid rgb(218, 210, 210);
  border-radius: 15px;
  text-align: left;
  padding: 0.5rem;
  min-height: 390px;
  cursor: pointer;
  margin: 0 5px;

  img {
    display: flex;
    object-fit: cover;
    height: auto;
    width: 100%;
  }
`;

export const Body = styled.div``;

export const ImageContainer = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
  img {
    height: auto;
    width: 100%;
    object-fit: contain;
  }
`;

export const Title = styled.div`
  font-size: 15px;
  color: #1a1a1a;
  margin-top: 5px;
  font-weight: 600;
`;

export const Description = styled.div`
  font-size: 14px;
  color: #4d4d4d;
  margin-top: 5px;
  font-weight: 400;
`;

export const Price = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin: 5px 0;
`;

export const AddToCartContainer = styled.div`
  margin-top: 15px;
  width: 100%;
  align-items: center;
`;
