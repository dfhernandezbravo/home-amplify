import styled from 'styled-components';

export const ButtonContainer = styled.div`
  width: 100%;
  padding: ${({ theme: { spacing } }) => spacing[50]};
  position: absolute;
  bottom: 0;
`;

export const AddToCartButton = styled.button`
  width: 100%;
  background: none;
  border: 1px solid ${({ theme: { colors } }) => colors.neutral.low};
  border-radius: ${({ theme: { radius } }) => radius.xsm};
  color: ${({ theme: { colors } }) => colors.neutral.low};
  font-size: ${({ theme: { fontSize } }) => fontSize[200]};
  font-weight: 700;
  height: 40px;
  padding: ${({ theme: { spacing } }) => `${spacing[100]} ${spacing[300]}`};
  color: ${({ theme: { colors } }) => colors.neutral.low};
  cursor: pointer;

  &:hover {
    background: #f1f3f4;
  }
`;
