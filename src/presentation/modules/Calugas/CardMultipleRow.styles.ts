import styled from 'styled-components';

export const Container = styled.div`
  max-width: 77rem;
  margin: 40px auto auto auto;
`;
export const RootContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
`;
export const MultipleRowContainer = styled.div`
  cursor: pointer;
  img {
    padding: 5px;

    &:hover {
      filter: brightness(80%);
    }
  }

  @media (min-width: 1024px) {
    padding: 0.5rem;
    &:hover {
      transform: scale(0.95);
      box-shadow: 0 1px 8px rgba(100, 100, 100, 0.2);
    }
  }
`;
export const SingleRowContainer = styled.div``;
export const GroupContainer = styled.div`
  cursor: pointer;

  a > img {
    padding: 5px;

    &:hover {
      filter: brightness(80%);
    }

    @media (min-width: 1024px) {
      padding: 0.5rem;
      &:hover {
        transform: scale(0.95);
        box-shadow: 0 1px 8px rgba(100, 100, 100, 0.2);
      }
    }
  }
`;
export const ContainerSlider = styled.div``;
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

  img {
    padding: 5px;

    &:hover {
      filter: brightness(80%);
    }

    @media (min-width: 1024px) {
      padding: 0.5rem;
      &:hover {
        transform: scale(0.95);
        box-shadow: 0 1px 8px rgba(100, 100, 100, 0.2);
      }
    }
  }
`;
export const MultipleRowContainerFixed = styled.div`
  img {
    padding: 5px;

    &:hover {
      filter: brightness(80%);
    }
  }
`;
export const RootContainerFixed = styled.div`
  width: 94%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: column;
  margin: auto;
`;
export const GroupContainerFixed = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  img {
    padding: 5px;

    &:hover {
      filter: brightness(80%);
    }
  }
`;
