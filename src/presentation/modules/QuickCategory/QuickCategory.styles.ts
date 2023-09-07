import Link from 'next/link';
import styled from 'styled-components';

type CategoryContainerStructs = {
  backgroundcolor: string;
};

export const Container = styled.div<CategoryContainerStructs>`
  background-color: ${(props) => props.backgroundcolor};
  display: flex;
  max-width: 76.2rem;
  margin: auto;
  border-radius: 8px;
  margin-top: 30px;
`;
export const CategoryContainer = styled.a<CategoryContainerStructs>`
  color: #fff;
  background-color: ${(props) => props.backgroundcolor};
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  width: 100%;
  height: 84px;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
  border-radius: 5px 0px 0px 5px;
  margin-right: 10px;
  cursor: pointer;
  & > img {
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(2deg)
      brightness(109%) contrast(101%);
    width: 48px;
    height: 48px;
  }
`;

export const SubcategoryContainer = styled.div`
  display: flex;
  align-items: center;
  height: 84px;
  margin: auto;
`;
export const Subcategory = styled.div<CategoryContainerStructs>`
  color: ${(props) => props.backgroundcolor};
  background-color: #fff;
  width: 12rem;
  height: 51px;
  border: 2px solid ${(props) => props.backgroundcolor};
  margin: auto 5px auto 5px;
  text-align: center;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  a {
    cursor: pointer;
  }

  &:hover {
    color: #fff;
    background-color: ${(props) => props.backgroundcolor};
    border: 2px solid ${(props) => props.backgroundcolor};
  }
`;

export const RedirectionIcon = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  & > img {
    color: #fff;
    width: 38px;
    height: 38px;
  }
`;

export const ContainerMobile = styled.div<CategoryContainerStructs>`
  background-color: ${(props) => props.backgroundcolor};
  max-width: 80rem;
  margin: auto;
  border-radius: 8px;
  margin: 13px;
`;
export const CategoryContainerMobile = styled.a<CategoryContainerStructs>`
  color: #fff;
  background-color: ${(props) => props.backgroundcolor};
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  width: 100%;
  height: 84px;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
  border-radius: 5px 5px 0px 0px;
  margin-right: 10px;
  cursor: pointer;
  & > img {
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(2deg)
      brightness(109%) contrast(101%);
    width: 48px;
    height: 48px;
  }
`;
export const SubcategoryContainerMobile = styled.div`
  display: flex;
  flex-flow: wrap;
  align-items: center;
  justify-content: center;
  height: max-content;
  padding: 10px;
  margin: auto;

  a {
    cursor: pointer;
  }
`;

export const SubcategoryMobileLink = styled(Link)<CategoryContainerStructs>`
  background-color: #fff;
  width: 45%;
  height: 51px;
  border: 2px solid ${(props) => props.backgroundcolor};
  border-radius: 8px;
  margin: 5px;
  color: ${(props) => props.backgroundcolor};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    color: #fff;
    background-color: ${(props) => props.backgroundcolor};
    border: 2px solid ${(props) => props.backgroundcolor};
  }
`;
