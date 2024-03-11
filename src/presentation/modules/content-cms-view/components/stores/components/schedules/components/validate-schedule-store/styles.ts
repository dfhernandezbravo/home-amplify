import styled from 'styled-components';

export const TimeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-right: 5px;
  font-weight: 600;

  & .store-open {
    color: #0f8551;
  }
  & .store-closed {
    color: #973911;
  }
`;
