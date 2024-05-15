import { ItemContent } from '@/domain/entities/content/content.types';
import useRedirectLink from '@/presentation/hooks/useRedirectLink';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import React, { useState } from 'react';
import { ImageCarousel, ImageDesktop, ImageMobile } from './styles';
import LazyLoad from 'react-lazyload';

const Skeleton = dynamic(
  () =>
    import('@ccom-easy-design-system/atoms.skeleton').then(
      (module) => module.Skeleton,
    ),
  { ssr: false, loading: () => <></> },
);

interface Props {
  item: ItemContent;
}

const RenderImageCarousel: React.FC<Props> = ({ item }) => {
  const { link, image, mobileImage, alt } = item;
  const { redirect } = useRedirectLink();
  const [isLoading, setIsLoading] = useState(true);

  return (
    <LazyLoad throttle={300} height={300}>
      <ImageCarousel>
        {isLoading && (
          <Skeleton height="100%" width="100%" animationtype="wave" />
        )}
        <Link href={redirect(link)} rel="dns-prefetch">
          <ImageDesktop
            src={image}
            width={0}
            height={0}
            sizes="100vw"
            fill
            alt={alt}
            loading="lazy"
            onLoad={() => setIsLoading(false)}
          />
          <ImageMobile
            src={mobileImage}
            width={0}
            height={0}
            sizes="100vw"
            fill
            alt={alt}
            loading="lazy"
            onLoad={() => setIsLoading(false)}
          />
        </Link>
      </ImageCarousel>
    </LazyLoad>
  );
};

export default RenderImageCarousel;
