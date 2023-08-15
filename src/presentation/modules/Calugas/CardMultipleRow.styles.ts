import styled  from 'styled-components';
export const Container = styled.div`
    max-width: 80rem;
    margin: 40px auto auto auto;
`;
export const RootContainer = styled.div`
    width: 100%;
    display:flex;
    align-items: center;
    justify-content: space-between;
    margin: auto;
`;
export const MultipleRowContainer = styled.div`
    &>img{
        padding: 5px
    }
`;
export const SingleRowContainer = styled.div`
`;
export const GroupContainer = styled.div`
    display: flex;
    justify-content: space-between;
    &>img{
        padding: 5px;
    }
`;
export const ContainerSlider = styled.div`
    border: 1px solid red;
`;