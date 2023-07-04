import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 2rem;
`;

export const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;

  button {
    height: 11px;
    border: none;
    margin: 0 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background-color: #aeaeae;
  }

  .carousel__dot--selected {
    width: 59px;
    height: 11px;
    border-radius: 8px;
    border-style: inset;
    border: 1.9px solid #cc1515;
    background-color: #cc1515;
  }
`;

export const Dots = styled.div`
  width: 22px;
  height: 11px;
  margin-bottom: 2rem;
`;
