import styled, { css } from 'styled-components';

type ButtonProps = {
    right?: boolean;
};

export const CarouselWrapper = styled.section`
    position: relative;
    margin-bottom: .5rem;
`;


export const CarouselImageContainer = styled.div`
    height: fit-content;

    img{
        width: 100%;
        height: auto;
    }
`;

export const CarouselNavButton = styled.div<ButtonProps>`
    position: absolute;
    top: 40%;
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
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0;
    padding-top: 0;
    
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
    margin-top: 1rem;

    div{
        width: 22px;
        height: 22px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    button{
        border: none;
        width: 12px;
        height: 12px;
        margin: 0 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background-color: #aeaeae;
    }
    
    .carousel__dot--selected{
        background-color: #cc1515;

        div{
            border-style: inset;
            border: 1.9px solid #cc1515;
        }
    }

`;

export const CarouselDot = styled.div`
    width: 22px;
    height: 22px;
`;
