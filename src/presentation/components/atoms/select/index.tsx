import dynamic from 'next/dynamic';

const Select = dynamic(
  () =>
    import('@ccom-easy-design-system/atoms.select').then(
      (module) => module.Select,
    ),
  { ssr: false, loading: () => <></> },
);

export default Select;
