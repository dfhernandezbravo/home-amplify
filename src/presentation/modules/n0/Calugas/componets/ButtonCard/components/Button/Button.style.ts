import styled from 'styled-components';

type ButtonProps = {
  $bgColor: string;
  color: string;
  $borderColor: string;
  fontSize: string;
  hoverBgColor: string;
  hoverColor: string;
  hoverOpacity: string;
  hoverBorderColor: string;
  hoverShadow: boolean;
};

export const ButtonType = styled.div<{ buttonStyles: ButtonProps }>`
  background-color: ${(props) => props.buttonStyles.$bgColor};
  padding: 10px;
  border: 1px solid
    ${(props) =>
      props.buttonStyles.$borderColor && props.buttonStyles.$borderColor};
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  p {
    font-size: ${(props) => `${props.buttonStyles.fontSize}px` || '14px'};
    color: ${(props) => props.color || '#fff'};
    font-weight: 700;
  }

  &:hover {
    background-color: ${(props) => props.buttonStyles.hoverBgColor};
    opacity: ${(props) => props.buttonStyles.hoverOpacity};
    border-color: ${(props) => props.buttonStyles.hoverBorderColor};

    p {
      color: ${(props) => props.buttonStyles.hoverColor};
    }
  }
`;

export const ButtonIcon = styled.img`
  width: 100%;
  max-height: 100px;
  max-width: 100px;
  height: auto;
`;
