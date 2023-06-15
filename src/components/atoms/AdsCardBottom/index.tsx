import Image from 'next/image';
import Link from 'next/link';
import { AdsCardBottomProps } from './AdsCardBottom.types';
import { CardWrapper } from './AdsCardBottom.styles';
import useBreakpoints from '@/hooks/useBreakpoints';

export const AdsCardBottom = (props: AdsCardBottomProps) => {
  const { image, link } = props;
  const { isSm } = useBreakpoints();
  return (
    <CardWrapper data-mobile={isSm}>
      <Link href={link}>
        <Image
          src={image}
          width={100}
          height={100}
          sizes="100vw"
          alt="Cencosud Ads Card"
        />
      </Link>
    </CardWrapper>
  );
};
