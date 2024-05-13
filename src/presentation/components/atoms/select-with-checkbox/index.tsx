import dynamic from 'next/dynamic';

const SelectWithCheckbox = dynamic(
  () =>
    import('@ccom-easy-design-system/atoms.select').then(
      (module) => module.SelectWithCheckbox,
    ),
  { ssr: false, loading: () => <></> },
);

export default SelectWithCheckbox;
