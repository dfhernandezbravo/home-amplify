import styled from 'styled-components';

export const Container = styled.div<{
  $fullWidth?: boolean;
}>`
  max-width: ${({ $fullWidth }) => ($fullWidth ? '100%' : '78rem')};
  margin: 0 auto;
`;
