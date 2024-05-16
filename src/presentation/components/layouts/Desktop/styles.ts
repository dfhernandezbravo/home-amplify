import styled from 'styled-components';

export const DesktopContainer = styled.div`
  display: block;

  @media (max-width: 1024px) {
    display: none;
  }
`;
