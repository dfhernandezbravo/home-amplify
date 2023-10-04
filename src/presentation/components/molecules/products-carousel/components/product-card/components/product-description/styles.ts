import styled from 'styled-components';

export const ProductDescriptionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme: { spacing } }) => spacing[50]};
  padding: ${({ theme: { spacing } }) => spacing[100]};
  font-family: ${({ theme: { fontFamily } }) => fontFamily.openSans};
`;

export const Brand = styled.span`
  font-weight: 600;
  font-size: ${({ theme: { fontSize } }) => fontSize[100]};
  line-height: 15px;
`;

export const Name = styled.span`
  font-weight: 400;
  font-size: ${({ theme: { fontSize } }) => fontSize[100]};
  line-height: 15px;
  min-height: 40px;
  max-height: 60px;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`;
