import { ShapeTypes } from '@/domain/entities/content/content.types';

interface Props {
  shape: ShapeTypes;
}

export const getRowsPerShape = ({ shape }: Props) => {
  switch (shape) {
    case 'circle':
      return 1;
    default:
      return 2;
  }
};
