import { Container, LinkCaluga } from './Caluga.styles';
import { ImageCaluga } from './Caluga.styles';
import useBreakpoints from '@/presentation/hooks/useBreakpoints';

const Caluga = ({
  image,
  title,
  link,
  width,
  mobileImage,
}: {[key: string]: string}) => {
  const { isSm, isXs } = useBreakpoints();

  return (
    <Container width={width}>
      <LinkCaluga href={link}>
        <ImageCaluga
          src={(isXs || isSm)  ? mobileImage : image }
          width={420}
          height={100}
          alt={title}
        />
      </LinkCaluga>
    </Container>
  );
};

export default Caluga;
