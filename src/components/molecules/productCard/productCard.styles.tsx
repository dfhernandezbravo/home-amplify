import styled, { css } from 'styled-components';

export const ProductCardContainer = styled.div`
    width: 23%;
    border: 1px solid rgb(218, 210, 210);
    border-radius: 15px;
    text-align: left;
    padding: 0 0.5rem;
    min-height: 390px;
    cursor: pointer;
    margin: 0 5px;

    img {
        display: flex;
        max-width: 60%;
        margin: 1rem 20%;
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