import { ShapeTypes } from '@/domain/entities/content/content.types';
import Image from 'next/image';
import styled, {
  DefaultTheme,
  FlattenInterpolation,
  FlattenSimpleInterpolation,
  ThemeProps,
  css,
} from 'styled-components';

export const SwiperContainer = styled.div`
  margin: 1rem auto;
  width: 100%;
  max-width: 77.25rem;
`;

const Circle = css`
  background-color: transparent;
`;

const Square = css`
  background-color: white;
  border: 1px solid #eaeaea;

  &:hover {
    background-color: ${({ theme: { colors } }) => colors.primary.main};
    color: white;
    & > img {
      filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(2deg)
        brightness(109%) contrast(101%);
    }
  }
`;

const variants: Record<
  ShapeTypes,
  FlattenInterpolation<ThemeProps<DefaultTheme>>
> = {
  circle: Circle,
  square: Square,
};

export const Card = styled.div<{ shape: ShapeTypes }>`
  width: 100%;
  height: 165px;
  padding: ${({ theme: { spacing } }) => spacing[250]} 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  ${(props) => variants[props.shape]}
`;

const CircleImage = css`
  border-radius: 50%;
  box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.16);
`;

const SquareImage = css`
  width: 90px;
  height: 90px;
`;

const variantsImage: Record<ShapeTypes, FlattenSimpleInterpolation> = {
  circle: CircleImage,
  square: SquareImage,
};

export const ImageCardContainer = styled.div<{ shape: ShapeTypes }>`
  ${(props) => variantsImage[props.shape]}
`;

export const ImageIcon = styled(Image)`
  width: 100%;
  height: auto;
`;

export const CardTitle = styled.div`
  width: 100%;
  margin-top: ${({ theme: { spacing } }) => spacing[100]};
  font-size: ${({ theme: { fontSize } }) => fontSize[300]};
  text-align: center;
`;
