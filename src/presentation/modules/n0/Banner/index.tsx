/* eslint-disable @next/next/no-img-element */

import { BannerStruct } from './Banner.types';
import { Subtitle, TextWrapper, Title, Wrapper } from './Banner.styles';
import useBreakpoints from '@/presentation/hooks/useBreakpoints';
import Link from 'next/link';
import useRedirectLink from '@/presentation/hooks/useRedirectLink';
import { useEffect, useState } from 'react';

const Banner = (props: BannerStruct) => {
  const { image, mobileImage, alt, link, textAbove } = props;
  const [texts, setTexts] = useState<string[]>([]);

  useEffect(() => {
    if (textAbove && textAbove?.length > 0) {
      setTexts(textAbove[0].text.split('/n'));
    }
  }, [textAbove]);

  const { isLg, isMd } = useBreakpoints();
  const { redirect } = useRedirectLink();

  return (
    <Wrapper>
      <Link href={redirect(link)}>
        <img src={isMd || isLg ? image : mobileImage} alt={alt} />
      </Link>
      {textAbove?.length && texts.length && (
        <TextWrapper>
          <Title as={textAbove[0].titleTag}>{textAbove[0].title}</Title>
          {texts.map((text, index) => (
            <Subtitle key={index}>{text}</Subtitle>
          ))}
        </TextWrapper>
      )}
    </Wrapper>
  );
};

export default Banner;
