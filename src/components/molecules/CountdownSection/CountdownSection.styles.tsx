import styled from 'styled-components';

type CountdownProps = {
    color?: string;
};

export const CountdownSectionWrapper = styled.section<CountdownProps>`
    display: flex;
    flex-direction: column;
    max-width: 77.25rem;
    height: 4.2rem;
    border-color: ${(props) => props.color  ?? 'rgb(193, 7, 17)'};
    border-style: solid;
    border-width: 1px;
    border-radius: 8px;
    overflow: hidden;
    margin: 1rem auto;

    @media (max-width: 77.25rem){
        margin: 1rem;
        height: 7.6rem;
    }
`;

export const CountdownHeader = styled.div<CountdownProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.color  ?? 'rgb(193, 7, 17)'};
    width: 100%;
    padding: 13px 11px;

    img{
        width: 45px;
        height: auto;
        margin-right: .5rem;
        background-color: ${(props) => props.color  ?? 'rgb(193, 7, 17)'};
    }

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;

        img{
            width: 32px;
            height: auto;
        }
    }
`;

export const CountdownTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const HighlightedText = styled.p`
    font-size: 35px;
    font-weight: 500;
    line-height: 52.5px;
    color: #fff;
    text-transform: uppercase;
    margin: 0 1rem 0 0;

    @media (max-width: 768px) {
        font-size: 25px;
        line-height: 37.5px;
        margin-bottom: .5rem ;
    }
`;

export const CountdownContent = styled.div<CountdownProps>`
    display: flex;
    height: fit-content;
`;