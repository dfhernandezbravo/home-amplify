import styled, { css } from 'styled-components';

export const ArrowButtonWrapper = styled.button<{
  disabled: boolean;
  position: 'right' | 'left';
  isPositionAbsolute: boolean;
}>`
  border: none;
  ${(props) =>
    props?.disabled
      ? css`
          color: rgba(16, 16, 16, 0.3);
        `
      : css`
          color: black;
        `};

  ${(props) =>
    props?.position === 'right'
      ? css`
          right: 1rem;
        `
      : css`
          left: 1rem;
        `};

  background: #fff;
  position: ${({ isPositionAbsolute }) =>
    isPositionAbsolute ? 'absolute' : 'relative'};
  top: 40%;
  transform: translateY(-70%);
  width: 42px;
  height: 52px;
  margin-top: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 8px;
  margin-left: 7px;
  margin-right: 7px;
  z-index: 2;
  & > svg {
    width: 30px;
    height: 30px;
  }
`;
