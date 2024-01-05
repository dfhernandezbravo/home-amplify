import Image from 'next/image';
import Link from 'next/link';
import styled, { css, RuleSet } from 'styled-components';

const Desktop = css`
  display: flex;
`;

const deviceMode: Record<string, RuleSet<object>> = {
  Desktop: Desktop,
};

export const QuickCategoriesContainer = styled.div<{
  backgroundcolor: string;
  device: string;
}>`
  background-color: ${(props) => props.backgroundcolor};
  width: 100%;
  margin: auto;
  border-radius: ${({ theme: { radius } }) => radius.sm};
  ${(props) => deviceMode[props.device]}
`;

export const CategoryContainer = styled(Link)<{ backgroundcolor: string }>`
  background-color: ${(props) => props.backgroundcolor};
  color: white;
  font-size: ${({ theme: { fontSize } }) => fontSize[300]};
  font-weight: 700;
  text-align: center;
  width: 100%;
  height: 84px;
  display: flex;
  justify-content: space-between;
  padding: ${({ theme: { spacing } }) => spacing[250]};
  align-items: center;
  border-radius: 5px 0px 0px 5px;
  margin-right: ${({ theme: { spacing } }) => spacing[100]};
  cursor: pointer;
  & > div > img {
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(2deg)
      brightness(109%) contrast(101%);
    width: 48px;
    height: 48px;
  }
`;

export const ImageCategory = styled(Image)`
  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(2deg)
    brightness(109%) contrast(101%);
`;

const subCategoryMobile = css`
  flex-flow: wrap;
  justify-content: center;
  height: max-content;
  padding: ${({ theme: { spacing } }) => spacing[100]};

  a {
    cursor: pointer;
  }
`;

const subCategoryDevice: Record<string, RuleSet<object>> = {
  Phone: subCategoryMobile,
  Tablet: subCategoryMobile,
};

export const SubCategoryContainer = styled.div<{ device: string }>`
  display: flex;
  align-items: center;
  height: 84px;
  margin: auto;
  ${(props) => subCategoryDevice[props.device]}
`;

export const Subcategory = styled(Link)<{ backgroundcolor: string }>`
  color: ${(props) => props.backgroundcolor};
  background-color: white;
  width: 12rem;
  height: 51px;
  border: 2px solid ${(props) => props.backgroundcolor};
  margin: auto 5px auto 5px;
  text-align: center;
  border-radius: ${({ theme: { radius } }) => radius.sm};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  margin: ${({ theme: { spacing } }) => spacing[100]};

  &:hover {
    color: #fff;
    background-color: ${(props) => props.backgroundcolor};
    border: 2px solid ${(props) => props.backgroundcolor};
  }
`;
