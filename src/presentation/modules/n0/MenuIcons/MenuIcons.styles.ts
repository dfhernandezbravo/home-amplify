import styled from 'styled-components';

type MenuProps = {
    columns: number;
}

export const Wrapper = styled.div<MenuProps>`
    width: 100%;
    align-items: center;
    display: grid;
    grid-template-columns: repeat(
        ${(props) => (props.columns)}, 1fr
    );
    gap: 1rem;
    margin-bottom: 50px;


    @media( max-width: 1024px){
        grid-template-columns: repeat(3, 1fr );
        padding: 0 1rem;
    }

    @media( max-width: 640px){
        grid-template-columns: repeat(2, 1fr );
        padding: 0 1rem;
    }
`;