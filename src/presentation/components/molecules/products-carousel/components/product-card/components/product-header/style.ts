import styled from 'styled-components';

export const ProductHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme: { spacing } }) => spacing[100]} 0px;
`;

export const ProductHeaderText = styled.span`
  color: ${({ theme: { colors } }) => colors.neutral.medium};
  font-size: ${({ theme: { fontSize } }) => fontSize[100]};
  font-weight: 600;
`;
