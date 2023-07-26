import styled, { css } from 'styled-components';

type CountdownProps = {
  color?: string;
};

type ButtonProps = {
  right?: boolean;
};

export const CountdownSectionWrapper = styled.section<CountdownProps>`
  display: flex;
  flex-direction: column;
  max-width: 77.25rem;
  height: max-content;
  border-color: ${(props) => props.color ?? 'rgb(193, 7, 17)'};
  border-style: solid;
  border-width: 1px;
  border-radius: 8px;
  overflow: hidden;
  margin: 1rem auto;

  @media (max-width: 77.25rem) {
    margin: 1rem;
    height: max-content;
  }
`;

export const CountdownHeader = styled.div<CountdownProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.color ?? 'rgb(193, 7, 17)'};
  width: 100%;
  padding: 13px 11px;

  img {
    width: 45px;
    height: auto;
    margin-right: 0.5rem;
    background-color: ${(props) => props.color ?? 'rgb(193, 7, 17)'};
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;

    img {
      width: 32px;
      height: auto;
    }
  }
`;

export const CountdownTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HighlightedText = styled.p`
  font-size: 35px;
  font-weight: 500;
  line-height: 52.5px;
  color: #fff;
  text-transform: uppercase;
  margin: 0 1rem 0 0;

  @media (max-width: 768px) {
    font-size: 25px;
    line-height: 37.5px;
    margin-bottom: 0.5rem;
  }
`;

export const CountdownContent = styled.div<CountdownProps>`
  display: flex;
  height: max-content;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 30px;

  @media (max-width: 1024px) {
    font-size: 14px;
    padding: 15px;

    img {
      width: 80px;
      height: 80px;
    }
  }
`;

export const Description = styled.div`
  display: flex;
  width: 100%;
`;

export const BuyButton = styled.div`
  margin: 0 auto;
  border: 1.6px solid #af1212;
  border-radius: 6px;
  color: #af1212;
  font-weight: 600;
  padding: 12px;
  width: max-content;
  cursor: pointer;
  margin-top: 20px;

  @media (max-width: 1024px) {
    margin-top: 0;
  }
`;

export const CarouselNavButton = styled.div<ButtonProps>`
  position: absolute;
  top: 40%;
  transform: translateY(-50%);
  width: 32px;
  height: 44px;
  outline: none;
  border: none;
  background: hsla(0, 0%, 100%, 0.3);
  cursor: pointer;
  border-radius: 8px;
  color: #000;
  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0;
  padding-top: 0;
  z-index: 2;

  &:hover {
    background-color: #fff;
  }

  ${(props) =>
    props.right === true
      ? css`
          right: 3rem;
        `
      : css`
          left: 3rem;
        `};

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

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

  @media (max-width: 1024px) {
    margin: 10px 0px;
  }
`;

export const Dots = styled.div`
  width: 22px;
  height: 11px;
  margin-bottom: 2rem;
`;
