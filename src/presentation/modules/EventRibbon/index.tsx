/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { EventRibbonStruct } from './EventRibbon.types';
import Container from './EventRibbon.styles';
import { IsMobile } from '@/presentation/hooks/utils';

const EventRibbon = (props: EventRibbonStruct) => {
  return (
    <Container>
      <Link href={props.link}>
        <img
          src={IsMobile() ? props['image-mobile'] : props['image-desktop']}
          alt={props.alt}
          width={100}
          height={100}
          sizes="100vw"
          title={props.alt}
        />
      </Link>
    </Container>
  );
};

export default EventRibbon;
