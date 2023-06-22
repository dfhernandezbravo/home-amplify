import { Container, LinkCaluga } from './Caluga.styles';
import { ImageCaluga } from './Caluga.styles';

const Caluga = ({
  image,
  title,
  link,
  width
}: {[key: string]: string}) => {

  return (
    <Container width={width}>
      <LinkCaluga href={link}>
        <ImageCaluga
          src={ image }
          width={420}
          height={100}
          alt={title}
          priority={true}
        />
      </LinkCaluga>
    </Container>
  );
};

export default Caluga;
