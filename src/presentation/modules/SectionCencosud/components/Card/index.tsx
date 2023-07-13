import Image from 'next/image';
import Link from 'next/link';
import { CardStructure } from './Card.types';
import { CardWrapper } from './Card.styles';
import useBreakpoints from '@/presentation/hooks/useBreakpoints';

const Card = (props: CardStructure) => {
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
          alt="Cencosud Card"
        />
      </Link>
    </CardWrapper>
  );
};

export default Card;