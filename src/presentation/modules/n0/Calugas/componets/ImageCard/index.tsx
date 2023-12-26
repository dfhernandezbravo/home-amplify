/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import { ContainerStruct } from '../../Calugas.types';
import { ButtonCard, Description, Label, Wrapper } from './ImageCard.styles';
import { Fragment, useEffect, useState } from 'react';
import useRedirectLink from '@/presentation/hooks/useRedirectLink';

interface PropsStruct {
  container: ContainerStruct;
}

const variants = {
  '1': 'default',
  '2': 'leftLabel',
  '3': 'topLabel',
  '4': 'rightLabel',
  '5': 'bottomButton',
  '6': 'topDescription',
};

const ImageCard = (props: PropsStruct) => {
  const { container } = props;

  const { redirect } = useRedirectLink();

  const { width, onHover } = container;

  const image = container?.image[0];
  const shadow = onHover[0].shadow;

  const [variant, setVariant] = useState<string>('default');

  const getVariantCase = (): string => {
    const imageVariant = image?.variant;
    return variants[imageVariant as keyof typeof variants] || 'default';
  };

  useEffect(() => {
    setVariant(getVariantCase());
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
      <Link href={redirect(container.link)}>
        <img src={image.image} alt={image.alt} />

        {isLabel() && (
          <Fragment>
            <Label variant={variant}>{image.labelText}</Label>
          </Fragment>
        )}

        {image.description && (
          <Description variant={variant}>{image.description}</Description>
        )}

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
