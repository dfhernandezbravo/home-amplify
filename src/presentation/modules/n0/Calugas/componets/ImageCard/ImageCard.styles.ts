import styled, { css } from 'styled-components';

type WrapperStruct = {
  width: number;
  shadow: boolean;
  opacity: string;
  columns: number;
};

type VariantStruct = {
  variant: string;
};

export const Wrapper = styled.div<WrapperStruct>`
  position: relative;
  width: ${(props) => (props.width ? `${props.width}%` : '100%')};
  cursor: pointer;
  position: relative;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  align-items: center;
  align-self: center;

  &:hover {
    box-shadow: ${(props) =>
      props.shadow ? `0px 0px 11px 0px rgba(43,43,43,0.2)` : ''};
    opacity: ${(props) => (props.opacity ? props.opacity : '1')};
  }

  a {
    text-decoration: none;
    display: inline-block;
    width: 100%;
    padding: 0 0.5rem;

    img {
      width: 100%;
      max-width: 100%;
      height: 100%;
    }
  }

  @media (max-width: 640px) {
    width: 100%;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;

    img {
      width: 100%;
    }
  }
`;

export const ImageWrapper = styled.div<{
  $isCircle: string;
}>`
  aspect-ratio: ${(props) => (props.$isCircle === 'true' ? '1/1' : 'auto')};
  overflow: hidden;
  border-radius: ${(props) => (props.$isCircle === 'true' ? '50%' : '0')};
`;

export const Label = styled.div<VariantStruct>`
  position: absolute;

  ${(props) => {
    const { variant } = props;

    if (variant === 'rightLabel') {
      return css`
        right: 8px;
        bottom: 19%;
        padding: 0.5rem 1rem;
        background-color: #fff;
        color: #000;
        box-shadow: 0px 5px 0 0 #128492;
      `;
    }
    if (variant === 'topLabel') {
      return css`
        max-width: 15.62rem;
        width: 100%;
        left: 50%;
        transform: translate(-50%, 0);
        top: 0;
        margin-top: 10px;
        padding: 0.25rem;
        background-color: #fff;
        font-size: 0.875rem;
        font-weight: 700;
        text-align: center;
        color: #4d4d4d;
      `;
    }
    return null;
  }}
`;

export const ButtonCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  border: 1px solid #000;
  color: #1a1a1a;
  font-size: 1.125rem;
  min-height: 2.938rem;
  max-width: 12.5rem;
  background: transparent;
  font-weight: 200;
  margin-top: 1.5rem;
`;

export const Description = styled.p<VariantStruct>`
  font-size: 1rem;
  font-weight: 300;
  color: #1a1a1a;
  text-align: center;
  margin-bottom: 1rem;

  ${(props) => {
    const { variant } = props;

    if (variant === 'default') {
      return css`
        padding: 0 1rem;
      `;
    }
    if (variant === 'topDescription') {
      return css`
        position: absolute;
        padding: 0 0.5rem;
        top: 0;
        left: 0;
      `;
    }
    return null;
  }}

  &:hover {
    text-decoration: underline;
    color: #1a1a1a;
  }
`;
