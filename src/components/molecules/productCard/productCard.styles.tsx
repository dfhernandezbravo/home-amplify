import styled, { css } from 'styled-components';

export const ProductCardContainer = styled.div`
    width: 15rem;
    border: 1px solid rgb(218, 210, 210);
    border-radius: 15px;
    text-align: center;
    padding: 20px;
    min-height: 390px;

    &:hover {
        box-shadow: 3px 3px 8px rgba(0,0,0,0.20);
        cursor: pointer;
    }
`;

export const Title = styled.div`
    max-width: 80%;
    font-size: 13.5px;
    color: rgb(92, 87, 87);
    margin: 5px auto;
`;

export const Price = styled.div`
    font-size: 16px;
    color: rgb(60, 130, 177);
`;

export const AddToCartContainer = styled.div`
    margin-top: 15px;
`;