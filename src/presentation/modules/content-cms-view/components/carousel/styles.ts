import Image from 'next/image';
import styled from 'styled-components';

export const SwiperContainer = styled.div`
  height: auto;
  max-width: 2060px;
  margin: auto;
`;
export const ImageCarousel = styled.div`
  width: 100vw;
  height: 63dvh;
  max-height: 598px;
  max-width: 2060px;
  position: relative;
  margin: auto;
  @media (max-width: 1024px) {
    height: 57dvh;
  }
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
