/* eslint-disable @next/next/no-img-element */

import useScrollYPosition from '@/presentation/hooks/useScrollYPosition';
import { ButtonTop } from './ButtonToTop.styles';

const handleToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const ButtonToTop = () => {

  return useScrollYPosition() ? (
    <ButtonTop onClick={handleToTop}>
      <img
        src="https://easycl.vtexassets.com/assets/vtex/assets-builder/easycl.store-theme/7.0.16/general/back-to-top___70c8570648e8b0bf6e41a5f63a4ed618.svg"
        alt="Icon to top"
      />
    </ButtonTop>
  )
  : null;
};

export default ButtonToTop;
