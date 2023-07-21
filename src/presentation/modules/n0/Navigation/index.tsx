import Link from "next/link";
import { NavigationStruct } from "./Navigation.types"
import { Wrapper } from "./Navigation.styles";

const Navigation = ( props : NavigationStruct) => {

    let { landingName } = props;
    landingName = landingName.replace(/-/g, ' ');

  return (
    <Wrapper>
        <nav>
            <Link href="https://www.easy.cl/"><p>Inicio</p></Link>
            <span>&#62;</span>
            <Link href={`https://www.easy.cl/${landingName}`}>
                Resultado de búsqueda para <span>&#34;</span><span>{landingName}</span>&#34;
            </Link>
        </nav>
    </Wrapper>
  )
}

export default Navigation