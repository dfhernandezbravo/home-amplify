import styled from 'styled-components';

type TextProps = {
  bgColor?: string;
  bolder?: string;
};

export const Wrapper = styled.div<TextProps>`
  padding: 2rem 5rem;
  margin-bottom: 2.5rem;
  background: ${(props) => (props.bgColor ? `${props.bgColor}` : '#fff')};

  p {
    font-size: 0.875rem;
    color: #4d4d4d;
    text-align: center;
    line-height: 1.5;
    font-weight: ${(props) => (props.bolder ? props.bolder : 'normal')};
  }

  @media (max-width: 640px) {
    padding: 2rem 3rem;
  }
`;
