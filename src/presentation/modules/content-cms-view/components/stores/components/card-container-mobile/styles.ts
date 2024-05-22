import styled from 'styled-components';

export const WrapperCardContainerMobile = styled.div`
  & .inner-mobile--container {
    padding: 10px;
  }
`;

export const ContainerMobile = styled.div`
  margin: 25px;
  border: 1px solid #b4c2cb;
  border-radius: 8px;

  & .neighborhood-title {
    color: #363f45;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  & .address {
    color: #485760;
    font-weight: 400;
    margin-bottom: 1rem;
  }

  & .services-mobile--wrapper {
    border-top: 1px solid #b4c2cb;
    border-radius: 0 0 7px 7px;
    background-color: #f1f3f4;
    padding: 16px;
    margin-top: 1rem;

    & .services-mobile--container {
      display: flex;
      gap: 5px;
    }
    & strong {
      margin-bottom: 16px;
      display: block;
    }
  }

  & .service-name {
    color: #485760;
  }
`;
