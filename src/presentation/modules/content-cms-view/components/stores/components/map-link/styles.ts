import styled from 'styled-components';

export const MapLinkContainer = styled.div`
  display: flex;
  & .map-link {
    display: flex;
    align-items: center;
    gap: 5px;
    text-decoration: underline;
    color: #485760;
    font-weight: 700;
    cursor: pointer;
  }
  & .map-arrow-icon {
    transform: rotate(180deg);
    margin-right: 15px;
  }

  @media only screen and (max-width: 768px) {
    margin-top: 2rem;
    justify-content: flex-end;
  }
`;
