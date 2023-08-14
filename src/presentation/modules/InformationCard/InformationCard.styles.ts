import { isMobile } from 'react-device-detect';
import styled, { css } from 'styled-components';


export const Container = styled.div`
    width: 100%;
    max-width: 80rem;
    height: 100%;
    margin: auto;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    margin-bottom: 40px;
`;
export const CardItem = styled.div<{ color: string, isMobile: boolean }>`
    border-radius: 4px;
    width: ${(props) => props.isMobile ? '95%' : '24.6%'};
    height: auto;
    min-height: 120px;
    max-height: 120px;
    display: flex;
    justify-content: center;
    margin: auto;
    align-items: center;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 4px 4px 0 rgba(37,39,39,.12);
    cursor: pointer;
    &:hover{
        ${(props) => {
        if (props.color) return css`border: 1px solid ${props.color}`
    }}
    }
`;

export const BolderElement = styled.b`
    font-size: 16px;
    color: #1a1a1a;
`;
export const HighlitedElement = styled.span`
    font-size: 13px;
    font-weight: 700;
`;

export const IconElement = styled.img`
    width: 50px;
    height: 50px;
    margin-right: 20px;
`;

export const NormalText = styled.span`
    color: #1a1a1a;
    font-size: 13px;
`;

export const ContainerSwiper = styled.div`
margin: auto;
margin-bottom: 30px;
margin-top: 15px;
`;