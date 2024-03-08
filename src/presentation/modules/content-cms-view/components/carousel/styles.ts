import Image from 'next/image';
import styled from 'styled-components';

export const SwiperContainer = styled.div`
  height: 60vh;
`;
export const ImageCarousel = styled.div`
  width: 100vw;
  height: 56vh;
  position: relative;
`;

export const ImageDesktop = styled(Image)`
  display: block;
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const ImageMobile = styled(Image)`
  display: block;
  @media (min-width: 1025px) {
    display: none;
  }
`;
