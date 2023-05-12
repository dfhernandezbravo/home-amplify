import styled from "styled-components";

export const CardWrapper = styled.div`
    position: relative;
    width: 33.3%;
    height: fit-content;
    padding: 0 0.5rem;

        img{
            width: 100%;
            height: auto;
        }

    &[data-mobile="true"]{
        width: 100%;
    }
`;