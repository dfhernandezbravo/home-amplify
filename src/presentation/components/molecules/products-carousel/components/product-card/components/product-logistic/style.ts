import styled from 'styled-components';

export const LogisticContainer = styled.div`
  padding: ${({ theme: { spacing } }) => spacing[50]}
    ${({ theme: { spacing } }) => spacing[100]};
`;

export const LogisticText = styled.span`
  font-weight: 700;
  font-size: ${({ theme: { fontSize } }) => fontSize[100]};
  color: ${({ theme: { colors } }) => colors.success.main};
  margin: 0;
`;
