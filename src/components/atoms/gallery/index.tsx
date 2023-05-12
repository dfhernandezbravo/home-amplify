import React, { useEffect, useState } from 'react';
import { GalleryItemProps, GalleryProps } from './gallery.types';
import Image from 'next/image';
import { isMobile } from 'react-device-detect';
import {
  GalleryButton,
  GalleryContainer,
  GalleryItemContainer,
  GalleryItemText,
  ItemsContainer,
} from './gallery.styles';
import { GrNext, GrPrevious } from 'react-icons/gr';
import Link from 'next/link';
import { useViewport } from '@/hooks/useViewport';

const Gallery = (props: GalleryProps) => {
  const { items, carouselMode, itemsPerRow } = props;

  // Hooks
  const { height, width } = useViewport();

  // states
  const [itemsToShow, setItemsToShow] = useState<GalleryItemProps[]>([]);
  const [currentPage, setCurrentPage] = useState(0);

  // constants
  const itemWidth = `${100 / itemsPerRow}%`;
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
    <GalleryContainer carouselMode={carouselMode}>
      {carouselMode && (
        <GalleryButton
          aria-label='go-previous'
          onClick={() => setCurrentPage((state) => state - 1)}
          disabled={currentPage === 0}
        >
          <GrPrevious size={'25px'} />
        </GalleryButton>
      )}
      <ItemsContainer carouselMode={carouselMode}>
        {itemsToShow.map((galleryItem, index) => {
          const { image = '', mobileImage, altDescription, link } = galleryItem;
          return (
            <GalleryItemContainer
              key={`gallery_item_${index}`}
              width={itemWidth}
              carouselMode={carouselMode}
              index={index}
            >
              {carouselMode ? (
                <Link href={link} aria-label={galleryItem.title}>
                  <Image
                    src={isMobile && mobileImage ? mobileImage : image}
                    alt={altDescription || ''}
                    width={100}
                    height={100}
                    sizes='100vw'
                    style={{
                      width: !carouselMode ? '100%' : '90px',
                      height: !carouselMode ? 'auto' : '90px',
                    }}
                  />
                  {galleryItem.title && (
                    <GalleryItemText>{galleryItem.title}</GalleryItemText>
                  )}
                </Link>
              ) : (
                <>
                  <Image
                    src={isMobile && mobileImage ? mobileImage : image}
                    alt={altDescription || ''}
                    width={100}
                    height={100}
                    sizes='100vw'
                    style={{
                      width: !carouselMode ? '100%' : '90px',
                      height: !carouselMode ? 'auto' : '90px',
                    }}
                  />
                  {galleryItem.title && (
                    <GalleryItemText>{galleryItem.title}</GalleryItemText>
                  )}
                </>
              )}
            </GalleryItemContainer>
          );
        })}
      </ItemsContainer>
      {carouselMode && (
        <GalleryButton
          aria-label='go-next'
          onClick={() => setCurrentPage((state) => state + 1)}
          disabled={items.length <= (currentPage + 1) * itemsPerRow}
        >
          <GrNext size={'25px'} />
        </GalleryButton>
      )}
    </GalleryContainer>
  );
};
export default Gallery;
