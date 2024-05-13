import styled from 'styled-components';

type cardConfig = {
  width: number;
  $borderColor: string;
  $bgColor: string;
};

type TextStruct = {
  bolder: boolean;
  $fontSize: string;
  $textColor: string;
  $leftLine: boolean;
  $rightLine: boolean;
  $underLine: boolean;
  $lineColor: string;
};

type textConfig = {
  $textConfig: TextStruct;
};

export const Wrapper = styled.div<cardConfig>`
  width: ${(props) => (props?.width ? `${props?.width}%` : '100%')};
  margin-bottom: 70px;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  background-color: ${(props) => (props.$bgColor ? `${props.$bgColor}` : '')};

  @media (max-width: 640px) {
    width: 100%;
  }
`;

export const Text = styled.p<textConfig>`
  width: 100%;
  text-align: center;
  font-size: ${(props) =>
    props?.$textConfig.$fontSize
      ? `${props?.$textConfig.$fontSize}px`
      : '14px'};
  color: ${(props) =>
    props?.$textConfig.$textColor ? props?.$textConfig.$textColor : '#1a1a1a'};
  font-weight: ${(props) => (props?.$textConfig.bolder ? 'bold' : '400')};
  margin: 10px 0;
  padding: 4px 2rem;
  line-height: 1.875rem;

  border-left: ${(props) =>
    props?.$textConfig.$leftLine
      ? `2px solid ${props?.$textConfig.$lineColor}`
      : ''};
  border-right: ${(props) =>
    props?.$textConfig.$rightLine
      ? `2px solid ${props?.$textConfig.$lineColor}`
      : ''};

  border-bottom: ${(props) =>
    props?.$textConfig.$underLine
      ? `2px solid ${props?.$textConfig.$lineColor}`
      : ''};

  @media (max-width: 900px) {
    font-size: 14px;
    margin: 3px 0;
    line-height: 1.5;
    padding: 1rem;
  }
`;
