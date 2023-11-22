import { Device } from '@/presentation/hooks/useBreakpoints';

const getSlidesPerView = (device: Device) => {
  switch (device) {
    case 'Desktop':
      return 5.2;

    case 'Tablet':
      return 3;

    default:
      return 1.5;
  }
};

export default getSlidesPerView;