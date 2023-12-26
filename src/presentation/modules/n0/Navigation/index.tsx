import Link from 'next/link';
import { NavigationStruct } from './Navigation.types';
import { Wrapper } from './Navigation.styles';
import useRedirectLink from '@/presentation/hooks/useRedirectLink';

const Navigation = (props: NavigationStruct) => {
  let { landingName } = props;
  landingName = landingName.replace(/-/g, ' ');
  const { redirect } = useRedirectLink();

  const easyLink = 'https://www.easy.cl/';
  const landingLink = `https://www.easy.cl/${landingName}`;

  return (
    <Wrapper>
      <nav>
        <Link href={redirect(easyLink)}>
          <p>Inicio</p>
        </Link>
        <span>&#62;</span>
        <Link href={redirect(landingLink)}>
          Resultado de búsqueda para <span>&#34;</span>
          <span>{landingName}</span>&#34;
        </Link>
      </nav>
    </Wrapper>
  );
};

export default Navigation;
