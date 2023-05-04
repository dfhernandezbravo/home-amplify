import React from 'react';
import { TextBannerProps } from './textBanner.types';
import Image from 'next/image';
import { isMobile } from 'react-device-detect';
import { TextBannerContainer } from './textBanner.styles';

const TextBanner = (props: TextBannerProps) => {

  const {
    image = '',
    mobileImage,
    altDescription,
    onClick
  } = props;

  return (
    <React.Fragment>
      <TextBannerContainer>
        <Image 
          src={isMobile && mobileImage ? mobileImage : image} onClick={onClick} alt={altDescription || ''}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }} />
      </TextBannerContainer>
    </React.Fragment>
  )
};
export default TextBanner;