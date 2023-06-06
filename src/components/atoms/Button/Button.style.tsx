import styled, { css } from 'styled-components';

// Definitions
export type Variant = 'text' | 'contained' | 'outlined' | 'disabled';

export type ButtonAttr = {
  disabled?: boolean;
  variant?: Variant;
  loading?: boolean;
};

const ButtonStyle = styled.button<ButtonAttr>`
  width: ${(props) => (props?.style?.width ? props?.style?.width : '100%')};
  padding: 15px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  font-size: 0.9rem;
  border-radius: 0.5rem;
  border: 0.5px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  ${(props) => {
    const { variant } = props;

    if (variant === 'text') {
      return css`
        color: #333333;
        background-color: transparent;
        text-decoration: underline;
      `;
    }
    if (variant === 'contained') {
      return css`
        background-color: #990707;
        color: #fff;
      `;
    }
    if (variant === 'outlined') {
      return css`
        border: 2px solid #990707;
        color: #990707;
        padding: 0.7rem;
        background-color: transparent;
      `;
    }
    if (variant === 'disabled') {
      return css`
        cursor: pointer;
        background-color: #f2f2f2;
        color: #818180;
      `;
    }
    return null;
  }}

  &:hover {
    cursor: pointer;
    ${(props) => {
      const { variant } = props;
      if (variant === 'text') {
        return css`
          background-color: transparent;
          text-decoration: none !important;
        `;
      }
      if (variant === 'contained') {
        return css`
          background-color: #af1212;
        `;
      }
      if (variant === 'outlined') {
        return css`
          border: 2px solid #990707;
          background-color: #990707;
          color: #f2f2f2;
        `;
      }
      return null;
    }}
  }
  &:disabled {
    cursor: pointer;
    background-color: #f2f2f2;
    color: #818180;
    ${(props) => {
      const { variant } = props;
      if (variant === 'outlined') {
        return css`
          background-color: #f2f2f2;
          color: #818180;
        `;
      }
      if (variant === 'text') {
        return css`
          cursor: default;
          background-color: #fff;
          color: #aaa !important;
          text-decoration: none !important;
        `;
      }
      return null;
    }}
  }
  &:focus {
    outline: 0;
  }
`;

export default ButtonStyle;
