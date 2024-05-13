import React from 'react';
import { Icon, Title, Wrapper } from './style';
import Image from 'next/image';
import { ContainerStruct } from '../../../Calugas/Calugas.types';

const CardText = (props: ContainerStruct) => {
  const { title, icon, bgColor, fontSize, content } = props;

  return (
    <Wrapper $bgColor={bgColor}>
      <Icon>
        <Image src={icon} alt={title} width={100} height={100} />
      </Icon>
      <Title fontSize={fontSize}>{title}</Title>
      {content}
    </Wrapper>
  );
};

export default CardText;
