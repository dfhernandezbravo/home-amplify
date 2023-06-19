import { CalugaItemProps } from '../../Calugas.types';
import { CalugaContainer, LinkCaluga } from './Caluga.styles';
import { ImageCaluga } from './Caluga.styles';
import useBreakpoints from '@/hooks/useBreakpoints';

const Caluga = ({
  image,
  title,
  link,
  width,
  mobileImage,
}: CalugaItemProps) => {
  const { isSm, isXs } = useBreakpoints();

  return (
    <CalugaContainer width={width}>
      <LinkCaluga href={link?.url || ''}>
        <ImageCaluga
          src={isXs || (isSm && image) ? mobileImage || '' : image || ''}
          width={420}
          height={100}
          alt={title || ''}
          priority={true}
        />
      </LinkCaluga>
    </CalugaContainer>
  );
};

export default Caluga;
