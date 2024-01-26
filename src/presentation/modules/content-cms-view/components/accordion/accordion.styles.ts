import styled from 'styled-components';

export const AccordionTitle = styled.div`
  position: relative;
  width: 100%;
  & .arrow--show,
  .arrow--hide {
    background-color: transparent;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 17.5px;
    border: none;
    cursor: pointer;
    width: 27.5px;
    height: 27.5px;
    position: absolute;
    top: 18%;
    right: 1%;
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

export const AccordionContent = styled.div`
  padding: 0 24px 16px 24px;
  color: #4d4d4d;
  font-size: 0.875rem;
  white-space: normal;
  line-height: 24px;
`;
