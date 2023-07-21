import styled from 'styled-components';

type WrapperStruct = {
    width: string;
  };

export const Wrapper = styled.div<WrapperStruct>`
    width: ${(props) => (props.width) ? `${props.width}%` : '100%' };
    cursor: pointer;
    margin-bottom: 50px;
    display: flex;
    align-items: center;
    
    a{
        text-decoration: none;
    }

    @media (max-width: 640px){
        width: 100%;
    }
`;

export const Text = styled.p`
    width: 100%;
    text-align: center;
    font-size: 1rem;
    color: #1a1a1a;
    font-weight: 300;
    margin: 10px 0;
    padding: 0 .5rem;
    line-height: 1.875rem;

    @media (max-width: 900px){
        font-size: 14px;
        margin: 3px 0;
        line-height: 1.5;
    }
`;