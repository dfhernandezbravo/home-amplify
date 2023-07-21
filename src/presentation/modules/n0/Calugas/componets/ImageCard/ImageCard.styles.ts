import styled from 'styled-components';

type WrapperStruct = {
    width: string;
  };

export const Wrapper = styled.div<WrapperStruct>`
    width: ${(props) => (props.width) ? `${props.width}%` : '100%' };
    cursor: pointer;
    margin-bottom: 50px;
    position: relative;
    height: 100%;

    a{
        text-decoration: none;
        display: inline-block;
        width: 100%;
        padding: 0 .5rem;

        img{
            width: 100%;
            max-width: 100%;
            height: 100%;
        }
    }

    @media (max-width: 640px){
        width: 100%;

        img{
            width:100%;
        }
    }
`;

export const Description = styled.p`
    width: 100%;
    text-align: center;
    font-size: 1rem;
    color: #1a1a1a;
    font-weight: 300;
`;

export const Label = styled.div`
    position: absolute;
    right: 8px;
    bottom: 19%;
    padding: 0.5rem 1rem;
    background-color: #fff;
    color: #000;
    box-shadow: 0px 5px 0 0 #128492;
`;

export const ButtonCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    border: 1px solid #000;
    color: #1a1a1a;
    font-size: 1.125rem;
    min-height: 2.938rem;
    max-width: 12.5rem;
    background: transparent;
    font-weight: 200;
    margin-top: 1.5rem;
`;