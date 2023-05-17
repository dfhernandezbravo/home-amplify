import React from "react";
import { TextBannerProps } from "./TextBanner.types";
import Image from "next/image";
import { TextBannerContainer } from "./TextBanner.styles";
import { useViewport } from "@/hooks/useViewport";

export const TextBanner = (props: TextBannerProps) => {
  const { image = "", mobileImage, altDescription, onClick } = props;

  const { width } = useViewport();

  return (
    <React.Fragment>
      <TextBannerContainer>
        <Image
          src={width < 1024 && mobileImage ? mobileImage : image}
          onClick={onClick}
          alt={altDescription || ""}
          width={100}
          height={100}
          sizes="100vw"
        />
      </TextBannerContainer>
    </React.Fragment>
  );
};
