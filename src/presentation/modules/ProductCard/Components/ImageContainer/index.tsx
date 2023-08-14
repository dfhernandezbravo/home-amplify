import React, { useState } from 'react';
import { Container } from './ImageContainer.style';
import Image from 'next/image';

type Props = {
  imagePrimary?: string;
  imageSecondary?: string;
  alt?: string;
};

const ImageContainer = (props: Props) => {
  const { imagePrimary, imageSecondary, alt } = props;

  // State
  const [imageToShow, setImageToShow] = useState<string | undefined>(imagePrimary);

  return imageToShow ? (
    <Container>
      <Image
        onMouseEnter={() => setImageToShow(imageSecondary || imagePrimary)}
        onMouseLeave={() => setImageToShow(imagePrimary)}
        src={imageToShow || ''}
        alt={alt || 'no-image-found'}
        width={300}
        height={300}
        priority
      />
    </Container>
  ) : null;
};

export default ImageContainer;
