import Link from 'next/link';
import styled, { css } from 'styled-components';

type CountdownProps = {
  color?: string;
};

type ButtonProps = {
  right?: boolean;
};

export const CountDownWrap = styled.div`
  max-height: max-content;
  width: 100%;
  margin: auto;
`;

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

export const DescriptionCarrousel = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: red;
  padding: 50px;
`;

export const ImageSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 150px;
    height: 150px;
  }
`;

export const ProductDescription = styled.div`
  min-height: 200px;
`;

export const DescriptionWrapper = styled.div`
  min-height: 200px;
`;

export const TitleDescription = styled.div`
  background: #f2f2f2;
  border-radius: 6;
  padding: 6px 10px;
  width: max-content;
  margin-bottom: 8px;
`;

export const ProductName = styled.p`
  margin-bottom: 10px;
`;

export const PriceWrapper = styled.div`
  display: flex;
`;

export const ProductPrice = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 15px;
`;

export const NormalPrice = styled.p`
  text-decoration: line-through;
  color: #4d4d4d;
  font-size: 12px;
`;

export const ProductDiscount = styled.p`
  margin-left: 10px;
  color: #990707;
  background: #f1dddd;
  padding: 2px 4px 2px 4px;
  border-radius: 5px;
  font-weight: 700;
  font-size: 14px;
  height: max-content;
`;

export const BuyButton = styled.div`
  margin: 0 auto;
  border: 1.6px solid #af1212;
  border-radius: 6px;
  padding: 12px;
  width: max-content;
  cursor: pointer;
  margin-top: 20px;
  color: #af1212;
  font-weight: 600;

  @media (max-width: 1024px) {
    margin-top: 0;
  }
`;

export const LinkBuyButton = styled(Link)`
  text-decoration: none;
  color: #af1212;
  font-weight: 600;
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
