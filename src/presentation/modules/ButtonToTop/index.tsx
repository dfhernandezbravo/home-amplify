/* eslint-disable @next/next/no-img-element */

import { ButtonTop } from './ButtonToTop.styles';
import { useState } from 'react';

const handleToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const ButtonToTop = () => {
  const [positionY, setPositionY] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setPositionY(position);
  };

  window.addEventListener('scroll', handleScroll);

  return positionY > 800 ? (
    <ButtonTop onClick={handleToTop}>
      <img
        src="https://easycl.vtexassets.com/assets/vtex/assets-builder/easycl.store-theme/7.0.16/general/back-to-top___70c8570648e8b0bf6e41a5f63a4ed618.svg"
        alt="Icon to top"
      />
    </ButtonTop>
  ) : null;
};

export default ButtonToTop;
