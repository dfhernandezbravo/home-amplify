import styled from 'styled-components';

export const ProductHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme: { spacing } }) => spacing[100]} 0px;
`;
