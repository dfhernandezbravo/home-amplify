import styled from 'styled-components';

export const ProductTypeSendContainer = styled.div`
  border-radius: ${({ theme: { radius } }) => radius.xsm};
  padding: ${({ theme: { spacing } }) => spacing[50]};
  background-color: ${({ theme: { colors } }) => colors.success.variant};
  color: ${({ theme: { colors } }) => colors.success.main};
  font-weight: 700;
  font-size: ${({ theme: { fontSize } }) => fontSize[100]};
  width: fit-content;
`;
