import styled from 'styled-components';

export const MobileContainer = styled.div`
  display: flex;
  width: 100%;

  @media (min-width: 768px) {
    display: none;
  }
`;