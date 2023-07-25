/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import { ContainerStruct } from '../../Calugas.types';
import { ButtonCard, Description, Label, Wrapper } from './ImageCard.styles';
import { Fragment, useEffect, useState } from 'react';

interface PropsStruct {
  container: ContainerStruct;
};

const ImageCard = (props: PropsStruct) => {
  const { container } = props;

  const { width, onHover } = container;

  
  const image = container?.image[0];
  const shadow = onHover[0].shadow;

  const [variant, setVariant] = useState<string>('default');

  useEffect(() => {
    switch (image?.variant) {
      case '2':
        setVariant('leftLabel');
        break;
      case '3':
        setVariant('topLabel');
        break;
      case '4':
        setVariant('rightLabel');
        break;
      case '5':
        setVariant('bottomButton');
        break;
      case '6':
        setVariant('topDescription');
        break;
      default:
        setVariant('default');
        break;
    }
  }, [image?.variant]);

  const isLabel = () => {
    return (
      variant === 'leftLabel' ||
      variant === 'topLabel' ||
      variant === 'rightLabel'
    );
  };

  const isButton = () => {
    return variant === 'bottomButton';
  };

  const wrapperCofig = {
    width,
    shadow,
  };

  return (
    <Wrapper {...wrapperCofig}>
      <Link href={container.link}>
        <img src={image.image} alt={image.alt} />

        {isLabel() && (
          <Fragment>
            <Label variant={variant}>{image.labelText}</Label>
          </Fragment>
        )}

        {image.description && <Description variant={variant}>{image.description}</Description>}

        {isButton() && (
          <Fragment>
            <ButtonCard>{image.buttonText}</ButtonCard>
          </Fragment>
        )}
      </Link>
    </Wrapper>
  );
};

export default ImageCard;
