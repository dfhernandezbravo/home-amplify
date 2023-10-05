import styled from 'styled-components';

export const ButtonContainer = styled.div`
  width: 100%;
  padding: ${({ theme: { spacing } }) => spacing[50]};
`;

export const AddToCartButton = styled.button`
  width: 100%;
  background: none;
  border: 1px solid ${({ theme: { colors } }) => colors.neutral.low};
  border-radius: ${({ theme: { spacing } }) => spacing[50]};
  color: ${({ theme: { colors } }) => colors.neutral.low};
  font-size: 14px;
  font-weight: 700;
  height: 40px;
  padding: 8px 24px;
  color: ${({ theme: { colors } }) => colors.neutral.low};
  cursor: pointer;
  &:hover {
    background: #f1f3f4;
  }
`;
