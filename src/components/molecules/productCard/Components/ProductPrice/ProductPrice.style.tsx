import styled from 'styled-components';

export const Container = styled.div``;

export const Row = styled.div`
  display: flex;
  align-items: center;
`;

export const Price = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin: 5px 0;
`;

export const OldPrice = styled.div`
  font-size: 20px;
  margin: 5px 0;
  text-decoration: line-through;
  font-size: 0.69rem;
  font-weight: 200;
  min-height: 1rem;
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
