import React, { useState } from 'react';
import { Container } from './ImageContainer.style';
import Image from 'next/image';
import Skeleton from '@/presentation/components/atoms/Skeleton';

type Props = {
  imagePrimary?: string;
  imageSecondary?: string;
  alt?: string;
};

const ImageContainer = (props: Props) => {
  const { imagePrimary, imageSecondary, alt } = props;
  const [isLoadImage, setIsLoadImage] = useState<boolean>(false)

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
        onLoad={() => setIsLoadImage(true)}
        style={{display: !isLoadImage ? 'none' : ''}}
      />
      {!isLoadImage && (<Skeleton/>)}
    </Container>
  ) : null;
};

export default ImageContainer;
