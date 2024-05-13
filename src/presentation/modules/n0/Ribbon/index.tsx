/* eslint-disable @next/next/no-img-element */

import useBreakpoints from '@/presentation/hooks/useBreakpoints';
import { RibbonStruct } from './Ribbon.types';
import { Wrapper } from './Ribbon.styles';
import Link from 'next/link';
import useRedirectLink from '@/presentation/hooks/useRedirectLink';
import { isDateInRange } from '@/presentation/hooks/useTimeValidator';

const Ribbon = (props: RibbonStruct) => {
  const { link, image, imageMobile, alt, isActive, startDate, endDate } = props;
  const { isLg } = useBreakpoints();
  const { redirect } = useRedirectLink();

  if (!isActive || !isDateInRange(startDate, endDate)) {
    return null;
  }

  let imageToShow = image;
  if (!isLg && imageMobile !== '') {
    imageToShow = imageMobile;
  }

  return (
    <Wrapper>
      <Link href={redirect(link)}>
        <img src={imageToShow} alt={alt} />
      </Link>
    </Wrapper>
  );
};

export default Ribbon;
