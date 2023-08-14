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
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    padding: 20px 20px 30px 20px; 
    cursor: pointer;
    filter: none; 
    backgroud-color: #fff;
    border: 1px solid #eaeaea;
    &:hover{    
        background: #cc1515;
        transition: filter 0.3s ease;
        &>img{
            filter: brightness(1000%);
            transition: filter 0.3s ease;
        }
        &>h4{
            color: #fff;
            transition: filter 0.3s ease;
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

export const ArrowButton = styled.div<{disabled: boolean}>`
    ${(props) => props?.disabled ? 
        css `color: rgba(16, 16, 16, 0.3)` : css `color: black`};
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
    &>svg{
        width: 30px;
        height: 30px;
    }
`;
