/* eslint-disable @next/next/no-img-element */

import { BannerStruct } from './Banner.types';
import { Subtitle, TextWrapper, Title, Wrapper } from './Banner.styles';
import useBreakpoints from '@/presentation/hooks/useBreakpoints';
import Link from 'next/link';
import useRedirectLink from '@/presentation/hooks/useRedirectLink';

const Banner = (props: BannerStruct) => {
  const { image, mobileImage, alt, link, textAbove } = props;

  const partes = textAbove[0]?.text?.split('/n');
  console.log(partes);

  const { isLg, isMd } = useBreakpoints();
  const { redirect } = useRedirectLink();

  return (
    <Wrapper>
      <Link href={redirect(link)}>
        <img src={isMd || isLg ? image : mobileImage} alt={alt} />
      </Link>
      <TextWrapper>
        <Title as={textAbove[0]?.titleTag}>{textAbove[0]?.title}</Title>
        {partes.map((parte, index) => (
          <Subtitle key={index}>{parte}</Subtitle>
        ))}
      </TextWrapper>
    </Wrapper>
  );
};

export default Banner;
