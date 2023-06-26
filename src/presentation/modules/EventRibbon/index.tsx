/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import { EventRibbonStruct } from './EventRibbon.types';
import Container from './EventRibbon.styles';
import useBreakpoints from '@/presentation/hooks/useBreakpoints';

const EventRibbon = (props: EventRibbonStruct) => {

  const { isMd, isXs, isSm } = useBreakpoints();
  return (
      <Container>
        <Link href={props.link || ''}>
          <img
            src={(isMd || isXs || isSm) ? props['image-mobile'] : props['image-desktop']}
            alt={props.alt || ''}
            width={100}
            height={100}
            sizes="100vw"
            title={props.alt || ""}
          />
        </Link>
      </Container>
  );
};

export default EventRibbon;
