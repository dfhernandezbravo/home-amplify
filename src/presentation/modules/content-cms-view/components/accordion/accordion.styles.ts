import styled, { keyframes } from 'styled-components';

export const AccordionTitle = styled.div`
  position: relative;
  width: 100%;
  z-index: 1;
  & .arrow--show,
  .arrow--hide {
    background-color: transparent;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 17.5px;
    border: none;
    cursor: pointer;
    width: 16px;
    height: 16px;
    position: absolute;
    top: 28%;
    right: 12px;
  }
`;

export const AccordionButton = styled.button`
  align-items: center;
  background-color: #f9f9f9;
  border: 1px solid #f2f2f2;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 9px 9px 9px 16px;
  width: 100%;
  color: #1a1a1a;
  font-size: 1rem;
  font-weight: 700;
  white-space: normal;
  text-align: left;
  padding-right: 2.5rem;
  &:hover {
    cursor: pointer;
    background-color: #f1dddd;
    border-color: #f1dddd;
  }
  & .active {
    background-color: #f1dddd;
    border-color: #f1dddd;
  }
`;

const slideInDown = keyframes`
  from {
    transform: translateY(-30%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const AccordionContent = styled.div`
  padding: 0 24px 16px 24px;
  color: #4d4d4d;
  font-size: 0.875rem;
  white-space: normal;
  line-height: 24px;
  animation: ${slideInDown} 0.25s cubic-bezier(0, 0, 0, 1);
`;
