import Link from 'next/link';
import { NavigationStruct } from './Navigation.types';
import { Wrapper } from './Navigation.styles';
import useLinks from '@/presentation/hooks/useLink';

const Navigation = (props: NavigationStruct) => {
  let { landingName } = props;
  landingName = landingName.replace(/-/g, ' ');
  const { getLink, sendEvent } = useLinks();

  const easyLink = 'https://www.easy.cl/';
  const landingLink = `https://www.easy.cl/${landingName}`;

  return (
    <Wrapper>
      <nav>
        <Link href={getLink(easyLink)} onClick={() => sendEvent(easyLink)}>
          <p>Inicio</p>
        </Link>
        <span>&#62;</span>
        <Link
          href={getLink(landingLink)}
          onClick={() => sendEvent(landingLink)}
        >
          Resultado de búsqueda para <span>&#34;</span>
          <span>{landingName}</span>&#34;
        </Link>
      </nav>
    </Wrapper>
  );
};

export default Navigation;
