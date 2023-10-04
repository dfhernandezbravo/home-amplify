import styled from 'styled-components';

export const ProductCampaignContainer = styled.div`
  border-radius: ${({ theme: { radius } }) => radius.xsm};
  padding: ${({ theme: { spacing } }) => spacing[50]};
  background-color: ${({ theme: { colors } }) => colors.primary.variant};
  color: ${({ theme: { colors } }) => colors.primary.main};
  font-weight: 700;
  font-size: ${({ theme: { fontSize } }) => fontSize[100]};
  width: fit-content;
`;
