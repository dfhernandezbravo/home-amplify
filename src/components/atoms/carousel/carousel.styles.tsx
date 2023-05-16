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

    img{
        width: 100%;
        height: auto;
    }
`;

export const CarouselNavButton = styled.button<ButtonProps>`
    width: 35px;
    height: 35px;
    outline: none;
    border: none;
    background: none;
    cursor: pointer;
    padding: 0;
    position: absolute;
    top: 50%;
    border-radius: 50%;
    color: white;
    box-shadow: 0px 4px 60px 20px rgba(3,3,3,0.9), inset 0 -3em 3em rgba(3,3,3,0.5);
    transform: translate(0, -50%);
    ${(props) => props.right === true ? css`right: 2%;` : css`left: 2%;`}
`;

export const CarouselDotContainer = styled.div`
    display: flex;
    gap: 5px;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: -3%;
    left: 50%;
    transform: translate(-50%, 0);
`;

export const CarouselDot = styled.div<DotProps>`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    cursor: pointer;
    ${(props) => props.active === true ? css`background-color:blue;` : css`background-color:red;`}
`;