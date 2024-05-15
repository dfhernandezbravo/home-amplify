import styled from 'styled-components';

export const DesktopContainer = styled.div`
  display: block;

  @media (max-width: 640px) {
    display: none;
  }
`;
