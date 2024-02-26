import { Device } from '@/presentation/hooks/useBreakpoints';

const getSlidesPerView = (device: Device) => {
  switch (device) {
    case 'Desktop':
      return 5;

    case 'Tablet':
      return 3.2;

    default:
      return 1.5;
  }
};

export default getSlidesPerView;
