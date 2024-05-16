import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 0.25rem;
  flex-wrap: wrap;
  padding: 15px;
  border-radius: 0 0 7px 7px;
  & .title {
    font-weight: 600;
    color: #363f45;
    margin-right: 4px;
  }
  background-color: #f1f3f4;
`;

export const ServiceContainer = styled.div`
  display: flex;
  gap: 5px;
  color: #485760;
`;
