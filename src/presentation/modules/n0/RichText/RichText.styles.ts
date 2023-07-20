import styled, { css } from 'styled-components';

type TextProps = {
  bgColor?: string;
  bolder?: string;
};

export const Wrapper = styled.div<TextProps>`
  padding: 2rem 5rem;
  margin-bottom: 2.5rem;
  background: ${(props) => (props.bgColor ? `#${props.bgColor}` : '#fff')};

  p {
    font-size: 0.813rem;
    text-align: center;
    line-height: 1.5;
    font-weight: ${(props) => (props.bolder ? props.bolder : 'normal')};
  }
`;
