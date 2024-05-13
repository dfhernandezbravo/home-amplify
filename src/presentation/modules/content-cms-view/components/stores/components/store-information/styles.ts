import styled from 'styled-components';

interface Props {
  $borderColor: string;
}

export const StoreInformationContainer = styled.div<Props>`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  gap: 5px;
  border: 1px solid ${({ $borderColor }) => $borderColor};
  border-radius: 8px;
`;
