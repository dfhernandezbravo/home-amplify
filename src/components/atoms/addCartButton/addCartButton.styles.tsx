import styled, { css } from 'styled-components';

export const AddCartButtonContainer = styled.div`
    border: 1px solid;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 30px;
    border-radius: 10px;
    font-size: 20px;
    color: rgb(110, 113, 116);
    border: 1px solid rgb(209, 196, 196);

    .remove{
        width: 30px;
        height: 100%;
        align-items: center;
        display: flex;
        justify-content: center;
        border-radius: 10px 0px 0px 10px;
        background-color: rgb(222, 209, 209);
        &:hover{
            background-color: rgb(211, 153, 153);
        }
    }
    .add{
        width: 30px;
        height: 100%;
        align-items: center;
        display: flex;
        justify-content: center;
        border-radius: 0px 10px 10px 0px;
        background-color: rgb(222, 209, 209);
    }
    .quantity{
        width: 100%;
        height: 100%;
        align-items: center;
        display: flex;
        justify-content: center;
    }
`;

export const AddButton = styled.div`
    border-radius: 10px;
    background-color: rgb(32, 17, 17);
    color: gainsboro;
    font-size: 16px;
    text-align: center;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;

    &:hover{
        background-color: rgb(202, 74, 74);
        cursor: pointer;
    }
`;