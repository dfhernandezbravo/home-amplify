import React from 'react';
import { TextBannerProps } from './TextBanner.types';
import Image from 'next/image';
import { TextBannerContainer } from './TextBanner.styles';
import useBreakpoints from '@/hooks/useBreakpoints';

export const TextBanner = (props: TextBannerProps) => {
  const { image = '', mobileImage, altDescription, onClick } = props;

  const { isMd } = useBreakpoints();

  return (
    <React.Fragment>
      <TextBannerContainer>
        <Image
          src={isMd && mobileImage ? mobileImage : image}
          onClick={onClick}
          alt={altDescription || ''}
          width={100}
          height={100}
          sizes="100vw"
          priority={true}
        />
      </TextBannerContainer>
    </React.Fragment>
  );
};
