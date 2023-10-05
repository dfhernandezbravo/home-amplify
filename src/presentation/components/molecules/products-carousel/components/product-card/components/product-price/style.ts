import styled from 'styled-components';

export const Container = styled.div`
  padding: ${({ theme: { spacing } }) => spacing[100]};
  height: 66px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
`;

export const Price = styled.span`
  font-size: ${({ theme: { fontSize } }) => fontSize[300]};
  color: ${({ theme: { colors } }) => colors.neutral.high};
  font-weight: 700;
  line-height: 20px;
`;

export const OldPrice = styled.div`
  font-size: 10px;
  margin: 5px 0;
  text-decoration: line-through;
  font-weight: 400;
  line-height: 14px;
  color: ${({ theme: { colors } }) => colors.neutral.low};
`;

export const DiscountPercentage = styled.div`
  margin-left: 0.5rem;
  border-radius: 4px;
  padding: 4px;
  background: #cc1515;
  color: #fff;
  font-size: 0.8rem;
  font-weight: 600;
`;
