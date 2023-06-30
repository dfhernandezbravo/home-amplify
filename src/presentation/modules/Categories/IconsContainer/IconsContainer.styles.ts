import styled from 'styled-components';

export const IconsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    max-height: 148px;
    @media(max-width: 1024px){
        flex-direction: column;
        max-height: 296px;
    }
`;

export const Icon = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 12px;
    font-weight: 500;
    width: 100%;
    height: 148px;
    border-top: .5px solid rgba(0, 0, 0, 0.15);
    border-bottom: .5px solid rgba(0, 0, 0, 0.15);
    border-left: .25px solid rgba(0, 0, 0, 0.15);
    border-right: .25px solid rgba(0, 0, 0, 0.15);
    background-color: #fff;
    cursor: pointer;

    img{
        width: 90px;
        height: 90px;
        padding: 5px;
    }

    &:hover{
        background-color: #BE0911;
        border: .5px solid transparent;
        p{
            color: #fff;
        }

        img{
            filter: brightness(100);
        }
    }
`;