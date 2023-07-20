import useBreakpoints from "@/presentation/hooks/useBreakpoints";
import { RibbonStruct } from "./Ribbon.types";
import { Wrapper } from "./Ribbon.styles";
import Link from "next/link";

const Ribbon = ( props : RibbonStruct) => {

  const { description, link, image, mobileImage, alt} = props;
  const { isLg } = useBreakpoints();
  let imageToShow = image;

  if(!isLg && mobileImage){
    imageToShow = mobileImage;
  }

  return (
    <Wrapper>
        <Link href={link}>
          <img src={ imageToShow} alt={alt} />
        </Link>
    </Wrapper>
    
  )
}

export default Ribbon