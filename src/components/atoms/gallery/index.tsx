import React, { useEffect, useState } from "react";
import { GalleryItemProps, GalleryProps } from "./gallery.types";
import Image from "next/image";
import { isMobile } from "react-device-detect";
import {
  GalleryButton,
  GalleryContainer,
  GalleryItemContainer,
  GalleryItemText,
} from "./gallery.styles";
import { GrNext, GrPrevious } from "react-icons/gr";

const Gallery = (props: GalleryProps) => {
  const { items, carouselMode, itemsPerRow } = props;

  // states
  const [itemsToShow, setItemsToShow] = useState<GalleryItemProps[]>([]);
  const [currentPage, setCurrentPage] = useState(0);

  // constants
  const itemWidth = carouselMode
    ? `${100 / (itemsPerRow + 1)}%`
    : `${100 / itemsPerRow}%`;

  useEffect(() => {
    if (carouselMode && itemsPerRow) {
      if (items.length >= itemsPerRow) {
        const start = currentPage * itemsPerRow;
        const itemsToShow = items.slice(start, start + itemsPerRow);
        setItemsToShow(itemsToShow);
      }
    } else {
      setItemsToShow(items);
    }
  }, [items, currentPage]);

  return (
    <React.Fragment>
      <GalleryContainer carouselMode={carouselMode}>
        {carouselMode && (
          <GalleryButton
            aria-label="Go previous"
            onClick={() => setCurrentPage((state) => state - 1)}
            disabled={currentPage === 0}
            style={{ left: "-0.5rem", bottom: "40%" }}
          >
            <GrPrevious size={"25px"} />
          </GalleryButton>
        )}
        {itemsToShow.map((galleryItem, index) => {
          const { image = "", mobileImage, altDescription, link } = galleryItem;
          return (
            <GalleryItemContainer
              key={`gallery_item_${index}`}
              width={itemWidth}
              carouselMode={carouselMode}
            >
              <Image
                src={isMobile && mobileImage ? mobileImage : image}
                alt={altDescription || ""}
                width={50}
                height={50}
                sizes="100vw"
                style={{
                  width: !carouselMode ? "100%" : "",
                  height: !carouselMode ? "auto" : "",
                }}
              />
              {galleryItem.title && (
                <GalleryItemText>{galleryItem.title}</GalleryItemText>
              )}
            </GalleryItemContainer>
          );
        })}
        {carouselMode && (
          <GalleryButton
            aria-label="Go previous"
            onClick={() => setCurrentPage((state) => state + 1)}
            disabled={items.length < (currentPage + 1) * itemsPerRow}
            style={{ right: "-0.5rem", bottom: "40%" }}
          >
            <GrNext size={"25px"} />
          </GalleryButton>
        )}
      </GalleryContainer>
    </React.Fragment>
  );
};
export default Gallery;
