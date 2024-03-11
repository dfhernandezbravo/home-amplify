import styled from 'styled-components';

export const Wrapper = styled.div`
  border: 1px solid #b4c2cb;
  border-radius: 8px;

  & .map-link {
    display: flex;
    align-items: center;
    gap: 5px;
    text-decoration: underline;
    color: #485760;
    font-weight: 700;
    cursor: pointer;
    & .map-arrow-icon {
      transform: rotate(180deg);
      margin-right: 15px;
    }
  }
`;

export const OuterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #b4c2cb;
  padding: 15px 0;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 15px;
`;
