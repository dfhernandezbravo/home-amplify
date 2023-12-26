import { ShapeTypes } from '@/domain/entities/content/content.types';
import Image from 'next/image';
import Link from 'next/link';
import styled, {
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
  css,
} from 'styled-components';

const Circle = css`
  font-size: ${({ theme: { fontSize } }) => fontSize[200]};
  background-color: transparent;
`;

const Square = css`
  background-color: white;
  border: 1px solid #eaeaea;

  &:hover {
    background-color: ${({ theme: { colors } }) => colors.primary.main};
    color: white;
    & > div > img {
      filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(2deg)
        brightness(109%) contrast(101%);
    }

    & > div:last-child > span {
      color: #fff;
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

export const Card = styled(Link)<{ shape: ShapeTypes }>`
  width: 100%;
  height: 165px;
  padding: ${({ theme: { spacing } }) => spacing[250]} 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  ${(props) => variants[props.shape]}
  text-decoration: none;
`;

const CircleImageContainer = css`
  border-radius: 50%;
  width: 100px;
  min-height: 100px;
  box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.16);

  img {
    width: 61px;
    height: 61px;
  }

  @media (max-width: 500px) {
    width: 58px;
    min-height: 58px;

    img {
      width: 33px;
      height: 33px;
    }
  }
`;

const SquareImageContainer = css`
  width: 90px;
  height: 90px;
`;

const variantsImage: Record<
  ShapeTypes,
  FlattenInterpolation<ThemeProps<DefaultTheme>>
> = {
  circle: CircleImageContainer,
  square: SquareImageContainer,
};

export const ImageCardContainer = styled.div<{ shape: ShapeTypes }>`
  ${(props) => variantsImage[props.shape]}
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageIcon = styled(Image)`
  width: 100%;
  height: auto;
`;

export const CardTitle = styled.div`
  width: 100%;
  margin-top: ${({ theme: { spacing } }) => spacing[100]};
  font-size: ${({ theme: { fontSize } }) => fontSize[200]};
  text-align: center;

  @media (max-width: 500px) {
    font-size: ${({ theme: { fontSize } }) => fontSize[50]};
  }

  span {
    color: #000;
  }
`;
