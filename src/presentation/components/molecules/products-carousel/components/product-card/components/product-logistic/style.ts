import styled from 'styled-components';

export const LogisticContainer = styled.div`
  padding: ${({ theme: { spacing } }) => spacing[100]};
`;

export const LogisticText = styled.span`
  font-weight: 700;
  font-size: ${({ theme: { fontSize } }) => fontSize[50]};
  color: ${({ theme: { colors } }) => colors.success.main};
`;
