import styled, { css } from 'styled-components';

type ButtonProps = {
    right?: boolean;
};

type DotProps = {
    active?: boolean;
};

type ImageContainerProps = {
    width: number;
};


export const CarouselContainer = styled.div`
    width: 100vw;
    height: fit-content;
    position: relative;
    display: flex;
    justify-content: flex-start;
    margin-bottom: 4rem;
    `;

export const CarouselImageContainer = styled.div`
    height: 100%;
    max-height:415px;
    cursor: pointer;
    display: flex;
    flex-shrink: 0;

    transition: all 0.5s;

    img{
        width: 100%;
        height: 100%;
    }
`;

export const CarouselNavButton = styled.div<ButtonProps>`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 32px;
    height: 44px;
    outline: none;
    border: none;
    background: hsla(0,0%,100%,.3);
    cursor: pointer;
    border-radius: 8px;
    color: #000;
    box-shadow: 0 4px 32px rgba(0,0,0,.1);
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    
    &:hover{
        background-color: #fff;
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
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -2rem;
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

export const CarouselWrapper = styled.div`

height: fit-content;
    .carousel{
        position: relative;
    }
`;