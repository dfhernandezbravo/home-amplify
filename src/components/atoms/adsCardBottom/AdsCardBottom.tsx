import Image from "next/image";
import Link from "next/link";
import { AdsCardBottomProps } from "./AdsCardBottom.types";
import { CardWrapper } from "./AdsCardBottom.styles";
import { useViewport } from "@/hooks/useViewport";

export const AdsCardBottom = (props : AdsCardBottomProps) =>{

    const { image, link } = props;
    const { width } = useViewport();


    return (
        <CardWrapper
            data-mobile = {width < 640}
        >
            <Link href={link}>
                <Image 
                    src={image}
                    width={100}
                    height={100}
                    sizes='100vw'
                    alt="Cencosud Ads Card"
                />
            </Link>
        </CardWrapper>
    )
}
