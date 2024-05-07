/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import { ContainerStruct } from '../../Calugas.types';
import {
  ButtonCard,
  Description,
  ImageWrapper,
  Label,
  Wrapper,
} from './ImageCard.styles';
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
  const isCircle = image?.isCircle;
  const shadow = onHover[0].shadow;
  const opacity = onHover[0].opacity;
  const columns = container?.columns;

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
    $shadow: shadow,
    opacity,
    columns,
  };

  return (
    <Wrapper {...wrapperCofig}>
      {container.image.map((img, i) => (
        <Link
          href={redirect(img.link)}
          key={`${img.alt}-${i}`}
          style={{ position: 'relative' }}
        >
          <ImageWrapper $isCircle={isCircle.toString()}>
            <img src={img.image} alt={img.alt} />
          </ImageWrapper>

          {isLabel() && <Label variant={variant}>{img.labelText}</Label>}

          {img.description && (
            <Description variant={variant}>{img.description}</Description>
          )}

          {isButton() && (
            <Fragment>
              <ButtonCard>{img.buttonText}</ButtonCard>
            </Fragment>
          )}
        </Link>
      ))}
    </Wrapper>
  );
};

export default ImageCard;
