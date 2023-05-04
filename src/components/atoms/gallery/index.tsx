import React, { useEffect, useState } from 'react';
import { GalleryItemProps, GalleryProps } from './gallery.types';
import Image from 'next/image';
import { isMobile } from 'react-device-detect';
import { GalleryButton, GalleryContainer, GalleryItemContainer, GalleryItemText } from './gallery.styles';
import { GrNext, GrPrevious } from 'react-icons/gr';

const Gallery = (props: GalleryProps) => {

  const {
    items,
    carouselMode,
    itemsPerRow
  } = props;

  // states
  const [itemsToShow, setItemsToShow] = useState<GalleryItemProps[]>([]);
  const [currentPage, setCurrentPage] = useState(0);

  // constants
  const itemWidth = carouselMode ? `${(100 / (itemsPerRow + 1))}%` : `${(100 / itemsPerRow)}%`;

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
      <GalleryContainer>
        {
          carouselMode &&
          <GalleryButton onClick={() => setCurrentPage(state => state - 1)} disabled={currentPage === 0}>
            <GrPrevious size={'24px'} />
          </GalleryButton>
        }
        {
          itemsToShow.map((galleryItem, index) => {
            const { image = '', mobileImage, altDescription, link } = galleryItem;
            return (
              <GalleryItemContainer key={`galerry_item_${index}`} width={itemWidth}>
                <Image 
                  src={isMobile && mobileImage ? mobileImage : image} alt={altDescription || ''}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }} 
                />
                {galleryItem.title && <GalleryItemText>{galleryItem.title}</GalleryItemText>}
              </GalleryItemContainer>
            )
          })
        }
        {
          carouselMode &&
          <GalleryButton onClick={() => setCurrentPage(state => state + 1)} disabled={items.length < ((currentPage + 1) * itemsPerRow)}>
            <GrNext size={'24px'}/>
          </GalleryButton>
        }
      </GalleryContainer>
    </React.Fragment>
  )
};
export default Gallery;