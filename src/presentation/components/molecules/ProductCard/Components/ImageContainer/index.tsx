import React, { useState } from 'react';
import { Container } from './ImageContainer.style';
import Image from 'next/image';

type Props = {
  image1?: string;
  image2?: string;
  alt?: string;
};

const ImageContainer = (props: Props) => {
  const { image1, image2, alt } = props;

  // State
  const [imageToShow, setImageToShow] = useState<string | undefined>(image1);

  return imageToShow ? (
    <Container>
      <Image
        onMouseEnter={() => setImageToShow(image2 || image1)}
        onMouseLeave={() => setImageToShow(image1)}
        src={imageToShow || ''}
        alt={alt || 'no-image-found'}
        height={1920}
        width={1421}
      />
    </Container>
  ) : null;
};

export default ImageContainer;
