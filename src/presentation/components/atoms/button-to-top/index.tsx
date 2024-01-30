import useScrollYPosition from '@/presentation/hooks/useScrollYPosition';
import { ButtonTop } from './ButtonToTop.styles';
import Image from 'next/image';

const icon =
  'https://easycl.vtexassets.com/assets/vtex/assets-builder/easycl.store-theme/7.0.16/general/back-to-top___70c8570648e8b0bf6e41a5f63a4ed618.svg';

const ButtonToTop = () => {
  const { isOverScroll } = useScrollYPosition({ minHeight: 800 });

  const handleToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return isOverScroll ? (
    <ButtonTop onClick={handleToTop}>
      <Image src={icon} alt="Icon to top" width={50} height={50} />
    </ButtonTop>
  ) : null;
};

export default ButtonToTop;
