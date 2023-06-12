import styled, { css } from 'styled-components';

export const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  text-align: left;
  height: 414px;
  max-width: 300px;
  padding: 0.5rem;
  cursor: pointer;
  background-color: #fff;
  margin: 0 0.3rem;
`;

export const Container = styled.div``;

export const StyledLink = styled.a`
  color: #000;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const Ribbon = styled.span`
  border-radius: 4px;
  padding: 4px;
  background: #ffe6e6;
  color: #cc1515;
  font-size: 0.688rem;
  font-weight: 700;
  width: max-content;
  position: absolute;
`;

export const Title = styled.div`
  font-size: 15px;
  color: #1a1a1a;
  margin-top: 5px;
  font-weight: 600;
`;

export const Description = styled.span`
  font-size: 14px;
  color: #4d4d4d;
  font-weight: 400;
  display: inline-block;
  line-height: 1.2rem;
  max-height: 2.4rem;
`;

export const AddToCartContainer = styled.div`
  margin-top: 15px;
  width: 100%;
  align-items: center;

  button {
    font-size: 1.1rem;
  }
`;
