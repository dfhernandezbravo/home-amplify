/* eslint-disable @next/next/no-img-element */

import { BannerStruct } from './Banner.types';
import { Fragment } from 'react';
import { Wrapper } from './Banner.styles';
import useBreakpoints from '@/presentation/hooks/useBreakpoints';
import N0Title from '../N0Title';
import Link from 'next/link';
import useRedirectLink from '@/presentation/hooks/useRedirectLink';

const Banner = (props: BannerStruct) => {
  const { title, image, mobileImage, alt, link } = props;

  const { isLg } = useBreakpoints();
  const { redirect } = useRedirectLink();

  return (
    <Fragment>
      {title && <N0Title text={title} />}
      <Wrapper>
        <Link href={redirect(link)}>
          <img src={isLg ? image : mobileImage} alt={alt} />
        </Link>
      </Wrapper>
    </Fragment>
  );
};

export default Banner;
