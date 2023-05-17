import styled, { css } from 'styled-components';

type ButtonProps = {
    right?: boolean;
};

type DotProps = {
    active?: boolean;
};

export const CarouselContainer = styled.div`
    width: 100vw;
    height: fit-content;
    position: relative;
    `;

export const CarouselImageContainer = styled.div`
    width: 100%;
    height: fit-content;
    position: relative;
    cursor: pointer;

    img{
        width: 100%;
        height: auto;
        transition: ease 1s;
    }
`;

export const CarouselNavButton = styled.button<ButtonProps>`
    width: 32px;
    height: 44px;
    outline: none;
    border: none;
    background: hsla(0,0%,100%,.3);
    cursor: pointer;
    position: absolute;
    border-radius: 8px;
    color: #000;
    box-shadow: 0 4px 32px rgba(0,0,0,.1);
    top: 50%;
    transform: translate(0, -50%);
    
    &:hover{
        background-color: #fff;
    }
    
    span{
        width: 20px;
        height: 25px;
        font-size: 2rem;
        font-weight: 500;
    }


    ${(props) => props.right === true ? css`right: 3rem;` : css`left: 3rem;`};

    @media (max-width: 1024px){
        display:none;
    }

`;

export const CarouselDotContainer = styled.div`
    display: flex;
    gap: 5px;
    justify-content: center;
    align-items: center;
    margin-top: .8rem;
`;

export const CarouselDot = styled.div<DotProps>`
    width: 22px;
    height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    cursor: pointer;

    div{
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: #e0e3e8;
    }

    ${(props) => props.active === true ? css`border: 2px solid #cc1515; div{ background-color: #cc1515}` : css``}
`;