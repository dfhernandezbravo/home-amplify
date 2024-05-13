import React from 'react';
import { Button, Icon, Title, Wrapper } from './style';
import Image from 'next/image';
import { ContainerStruct } from '../../../Calugas/Calugas.types';

const CardButton = (props: ContainerStruct) => {
  const { title, icon, bgColor, fontColor, fontSize, link, btnColor, content } =
    props;

  return (
    <Wrapper $bgColor={bgColor}>
      <Title fontSize={fontSize}>{title}</Title>

      <Button $btnColor={btnColor} $fontColor={fontColor} href={link}>
        <Icon>
          <Image src={icon} alt={title} width={70} height={70} />
        </Icon>
        {content}
      </Button>
    </Wrapper>
  );
};

export default CardButton;
