import { ProductCardProps } from '@ccom-easy-design-system/molecules.product-card/dist/types';
import dynamic from 'next/dynamic';

const CardBit = dynamic(
  () =>
    import('@ccom-easy-design-system/molecules.product-card').then(
      (module) => module.ProductCard,
    ),
  { ssr: false, loading: () => <></> },
);

const Card = (props: ProductCardProps) => {
  return <CardBit {...props} />;
};

export default Card;
