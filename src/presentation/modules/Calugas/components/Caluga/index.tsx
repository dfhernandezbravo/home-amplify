import useLinks from '@/presentation/hooks/useLink';
import { Container, LinkCaluga } from './Caluga.styles';
import { ImageCaluga } from './Caluga.styles';

const Caluga = ({ image, title, link, width }: { [key: string]: string }) => {
  const { getLink, sendEvent } = useLinks();
  return (
    <Container width={width}>
      <LinkCaluga href={getLink(link)} onClick={() => sendEvent(link)}>
        <ImageCaluga src={image} width={420} height={100} alt={title} />
      </LinkCaluga>
    </Container>
  );
};

export default Caluga;
