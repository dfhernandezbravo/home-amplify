/* eslint-disable @next/next/no-img-element */

import useBreakpoints from "@/presentation/hooks/useBreakpoints";
import { RibbonStruct } from "./Ribbon.types";
import { Wrapper } from "./Ribbon.styles";
import Link from "next/link";

const Ribbon = ( props : RibbonStruct) => {

  const { link, image, imageMobile, alt} = props;
  const { isLg } = useBreakpoints();

  let imageToShow = image;
  if(!isLg && imageMobile != ''){
    imageToShow = imageMobile;
  }

  return (
    <Wrapper>
        <Link href={link} target="_parent">
          <img src={ imageToShow} alt={alt} />
        </Link>
    </Wrapper>
    
  )
}

export default Ribbon