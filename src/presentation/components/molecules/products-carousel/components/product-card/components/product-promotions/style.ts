import styled from 'styled-components';

export const ProductPromotionsContainer = styled.div`
  border-radius: ${({ theme: { radius } }) => radius.xsm};
  padding: ${({ theme: { spacing } }) => spacing[50]};
  background-color: ${({ theme: { colors } }) => colors.success.main};
  color: white;
  font-weight: 700;
  font-size: ${({ theme: { fontSize } }) => fontSize[100]};
  width: fit-content;
`;
