import styled from 'styled-components';

export const AwsPersonalizeContainer = styled.div`
  padding: ${({ theme: { spacing } }) =>
    `${spacing[300]} ${spacing[400]} ${spacing[300]} ${spacing[400]}`};
  border-radius: ${({ theme: { radius } }) => radius.sm};
  gap: ${({ theme: { spacing } }) => spacing[300]};
`;
