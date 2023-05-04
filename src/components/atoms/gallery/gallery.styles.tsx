import styled, { css } from 'styled-components';

type ItemProps = {
    width: string;
}

type ButtonProps = {
    disabled: boolean;
}

export const GalleryContainer = styled.div`
    padding: 0 1rem;
    margin: 1rem auto;
    max-width: 80rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const GalleryItemContainer = styled.div<ItemProps>`
    max-height: 420px;
    filter: brightness(80%);
    width: ${props => props.width};
    padding: 8px;
    cursor: pointer;

    img {
        max-width: 100%;
        border-radius: 12px;

        &:hover {
            padding: 8px;
        }
    }
`;

export const GalleryItemText = styled.div`
    font-size: 1rem;
    margin: 0 auto;
    width: 100%;
    text-align: center;
`;

export const GalleryButton = styled.button<ButtonProps>`
    background-color: transparent;
    border: 0;
    cursor: pointer;

    svg polyline {
        stroke: ${props => props.disabled ? 'lightGray' : 'black'};
    }
`;