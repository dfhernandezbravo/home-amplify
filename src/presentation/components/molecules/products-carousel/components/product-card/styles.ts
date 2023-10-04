import styled from 'styled-components';

export const ProductContainer = styled.div`
  background-color: white;
  border-radius: ${({ theme: { radius } }) => radius.sm};
  padding: ${({ theme: { spacing } }) => spacing[100]} 0px;
  min-height: 382px;
  height: auto;
  margin: 0px ${({ theme: { spacing } }) => spacing[50]};
  display: flex;
  flex-direction: column;
`;

export const HeaderContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: ${({ theme: { spacing } }) => spacing[100]};
`;

export const CampaignContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: ${({ theme: { spacing } }) => spacing[50]};
`;

export const PromotionContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: ${({ theme: { spacing } }) => spacing[100]};
`;
