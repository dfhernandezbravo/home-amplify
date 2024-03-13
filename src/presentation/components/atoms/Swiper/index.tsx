import dynamic from 'next/dynamic';

const SwiperBit = dynamic(
  () =>
    import('@ccom-easy-design-system/molecules.swiper').then(
      (module) => module.Swiper,
    ),
  { ssr: false, loading: () => <></> },
);

export default SwiperBit;
