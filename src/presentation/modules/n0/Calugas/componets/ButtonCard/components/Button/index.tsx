import React from 'react';
import { ButtonStruct } from '../../../../Calugas.types';
import { ButtonIcon, ButtonType } from './Button.style';
import Link from 'next/link';

interface ButtonProps {
  button: ButtonStruct;
}

type ButtonStyles = {
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

const Button = ({ button }: ButtonProps) => {
  if (!button.label) {
    return null;
  }

  const buttonStyle: ButtonStyles = {
    $bgColor: button.bgColor,
    color: button.textColor,
    $borderColor: button.borderColor,
    fontSize: button.fontSize,
    hoverBgColor: button.onHover[0].bgColor,
    hoverColor: button.onHover[0].textColor,
    hoverOpacity: button.onHover[0].opacity,
    hoverBorderColor: button.onHover[0].borderColor,
    hoverShadow: button.onHover[0].shadow,
  };

  return (
    <Link
      href={button.link}
      style={{ color: 'transparent', alignSelf: 'center' }}
    >
      <ButtonType buttonStyles={buttonStyle}>
        {button.icon && <ButtonIcon src={button.icon} alt={button.label} />}
        <p>{button.label}</p>
      </ButtonType>
    </Link>
  );
};

export default Button;
