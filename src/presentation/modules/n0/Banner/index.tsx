import { BannerStruct } from "./Banner.types";
import { Fragment } from "react";
import Image from "next/image";
import { Wrapper } from "./Banner.styles";
import useBreakpoints from "@/presentation/hooks/useBreakpoints";
import N0Title from "../N0Title";
import Link from "next/link";

const Banner = (props : BannerStruct) => {

  const { title, image, mobileImage, alt, link } = props;

  const { isLg } = useBreakpoints();


  return (
    <Fragment>
      { title && <N0Title text={title} />}
      <Wrapper>
        <Link href={link}>
          <img src={ isLg ? image : mobileImage} alt={alt} />
        </Link>
      </Wrapper>
    </Fragment>
    
  )
}

export default Banner;