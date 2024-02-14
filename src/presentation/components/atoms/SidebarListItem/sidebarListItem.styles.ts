import styled from 'styled-components';

export const ItemWithoutLink = styled.li`
  border: none;
  border-bottom: 1px solid #e2e2e2;
  font-size: 14px;
  font-weight: 600;
  margin: 0;
  padding: 16px;
  position: relative;
  color: #1a1a1a;
  cursor: pointer;
  &:last-child {
    border-bottom: none;
  }
  &.selected {
    position: relative;
    color: #ec0000;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 12.5%;
      bottom: 0;
      width: 4px;
      height: 38px;
      background-color: #ec0000;
      @media (max-width: 640px) {
        background-color: transparent;
      }
    }
  }
`;

export const ItemWithLink = styled.a`
  display: block;
  border: none;
  border-bottom: 1px solid #e2e2e2;
  font-size: 14px;
  font-weight: 600;
  margin: 0;
  padding: 16px;
  position: relative;
  color: #1a1a1a;
  &:last-child {
    border-bottom: none;
  }
  &.selected {
    position: relative;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 12.5%;
      bottom: 0;
      width: 4px;
      height: 38px;
      background-color: #ec0000;
      @media (max-width: 640px) {
        background-color: transparent;
      }
    }
  }
`;
