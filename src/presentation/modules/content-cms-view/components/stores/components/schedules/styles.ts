import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  color: #485760;
  & .schedule {
    margin-right: 0.5rem;
  }
  & .hour {
    font-weight: 600;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
