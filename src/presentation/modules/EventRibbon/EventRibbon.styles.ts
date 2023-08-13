import styled from 'styled-components';

// -> remover marin-bottom -4px;

const Container = styled.section`
  width: 100%;
  height: fit-content;
  cursor: pointer;
  text-align: center;
  margin-bottom: -4px;
  &>img {
    object-fit: fill;
    width: 100%;
    height: 100%;
    min-height: 40px;
   
  }
`;
export default Container;
