import { ShapeTypes } from '@/domain/entities/content/content.types';
import { Device } from '@/presentation/hooks/useBreakpoints';

interface Props {
  device: Device;
  shape: ShapeTypes;
  itemsPerRow: number;
}

export const getSlidePerview = ({ device, shape, itemsPerRow }: Props) => {
  switch (device) {
    case 'Desktop':
      return itemsPerRow;

    case 'Tablet':
      return shape === ShapeTypes.CIRCLE ? 5 : 4;

    default:
      return shape === ShapeTypes.CIRCLE ? 5 : 2;
  }
};
