import Image from 'next/image';
import Link from 'next/link';

import { HuinchaStruct } from './Huincha.types';
import HuinchaContainer from './Huincha.styles';

import useBreakpoints from '@/presentation/hooks/useBreakpoints';

const Huincha = (props: HuinchaStruct) => {
  const { imageDesktop = '', imageMobile, alt, link } = props;

  const { isMd, isXs, isSm } = useBreakpoints();

  return (
      <HuinchaContainer>
        <Link href={link || ''}>
          <Image
            src={(isMd || isXs || isSm) && imageMobile ? imageMobile : imageDesktop}
            alt={alt || ''}
            width={100}
            height={100}
            sizes="100vw"
            priority={true}
          />
        </Link>
      </HuinchaContainer>
  );
};

export default Huincha;
