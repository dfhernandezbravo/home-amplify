import styled, { css } from 'styled-components';

export const AddButton = styled.div`
    border-radius: 10px;
    background-color: white;
    border: 1px solid #990606;
    color: #990606;
    font-size: 1rem;
    font-weight: 700;
    text-align: center;
    min-height: 2.875rem;
    align-items: center;

    .text {
        margin-top: 10px;
    }
    &:hover{
        background-color: #990606;
        border: none;
        color: white;
    }
`;