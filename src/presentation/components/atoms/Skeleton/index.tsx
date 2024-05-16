import dynamic from 'next/dynamic';

export const Skeleton = dynamic(
  () =>
    import('@ccom-easy-design-system/atoms.skeleton').then(
      (module) => module.Skeleton,
    ),
  {
    ssr: false,
  },
);
