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
    
`;
export const ContainerSwiper = styled.div`
    margin: auto;
    margin-bottom: 30px;
    margin-top: 15px;   
    width: 100%;
    height: 100%;
`;
export const GroupContainerSlide = styled.div`
    display: flex;
    justify-content: space-between;
    &>img{
        padding: 5px;
    }
`;
export const MultipleRowContainerFixed = styled.div`
    &>img{
        padding: 5px
    }
`;
export const RootContainerFixed = styled.div`
    width: 94%;
    display:flex;
    align-items: center;
    justify-content: space-between;
    flex-flow: column;
    margin: auto;
`;
export const GroupContainerFixed = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    &>img{
        padding: 5px;
    }
`;