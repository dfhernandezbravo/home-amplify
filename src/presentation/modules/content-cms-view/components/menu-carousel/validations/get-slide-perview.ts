import { ShapeTypes } from '@/domain/entities/content/content.types';
import { Device } from '@/presentation/hooks/useBreakpoints';

interface Props {
  device: Device;
  shape: ShapeTypes;
  itemsPerRow: number;
}

interface GetSliderPerViewResponse {
  slidePerView: number;
  isGrid: boolean;
  rows: number;
}

export const getSlidePerview = ({
  device,
  shape,
  itemsPerRow,
}: Props): GetSliderPerViewResponse => {
  switch (device) {
    case 'Desktop':
      return { slidePerView: itemsPerRow, isGrid: false, rows: 1 };

    case 'Tablet':
      return {
        slidePerView: shape === ShapeTypes.CIRCLE ? 5 : 8,
        isGrid: true,
        rows: 2,
      };

    default:
      return {
        slidePerView: shape === ShapeTypes.CIRCLE ? 5 : 6,
        isGrid: true,
        rows: 2,
      };
  }
};
