import React from 'react';
import { SubTitle, Text } from './TextLine.styles';
import Link from 'next/link';

interface TextLineProps {
  subtile?: string;
  link?: string;
  subtituleFontsize?: string;
  position?: string;
  colorSubtitle?: string;
  text: string;
  textFontsize?: string;
  colorText?: string;
}

export const TextLine = ({
  subtile,
  link,
  subtituleFontsize,
  position,
  colorSubtitle,
  text,
  textFontsize,
  colorText,
}: TextLineProps) => {
  const renderSubTitle = () => {
    const subTitleProps = {
      $subtituleFontsize: subtituleFontsize,
      $position: position,
      $colorSubtitle: colorSubtitle,
    };

    if (link) {
      return (
        <Link href={link}>
          <SubTitle {...subTitleProps}>{subtile}</SubTitle>
        </Link>
      );
    }
    return <SubTitle {...subTitleProps}>{subtile}</SubTitle>;
  };

  return (
    <div>
      {subtile && renderSubTitle()}

      <Text $colorText={colorText} $textFontsize={textFontsize}>
        {text}
      </Text>
    </div>
  );
};
