/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import { ContainerStruct } from '../../Calugas.types';
import { ButtonCard, Description, Label, Wrapper } from './ImageCard.styles';

type PropsStruct = {
  container: ContainerStruct;
};

const ImageCard = (props: PropsStruct) => {
  const { container } = props;
  const image = container.image[0];

  return (
    <Wrapper width={container.width.toString()}>
      <Link href={container.link}>
        <img src={image.image} alt={image.alt} />
        {image.description ? <Description>{image.description}</Description> : null}
        {image.labelText ? <Label>{image.labelText}</Label> : null }
        {image.buttonText ? <ButtonCard>{image.buttonText}</ButtonCard> : null }
      </Link>
    </Wrapper>
  );
};

export default ImageCard;
