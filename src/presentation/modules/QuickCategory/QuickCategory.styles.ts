import Link from 'next/link';
import styled from 'styled-components';

type CategoryContainerStructs = {
    backgroundColor: string;
}

export const Container = styled.div<CategoryContainerStructs>`
    background-color: ${(props) => props.backgroundColor};
    display: flex;
    max-width: 76.2rem;
    margin: auto;
    border-radius: 8px;
    margin-top: 30px;
    
`;
export const CategoryContainer = styled.a<CategoryContainerStructs>`
    color: #fff;
    background-color: ${(props) => props.backgroundColor};
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
    &> img{
        filter: brightness(10000%);
        width: 48px;
        height: 48px;
    }

`;

export const SubcategoryContainer = styled.div`
    display: flex;
    align-items: center;
    height: 84px;
    margin: auto;
    cursor: pointer;
`;
export const Subcategory = styled.div`
    color: #cc1515;
    background-color: #fff;
    width: 12rem;
    height: 51px;
    border: 2px solid #AF1212;
    margin: auto 5px auto 5px;
    text-align: center;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const RedirectionIcon = styled.div`
    width: 38px;
    height: 38px;
    border-radius: 50%;
    &>img{
        color: #fff;
        width: 38px;
        height: 38px;
    }
`;

export const ContainerMobile = styled.div<CategoryContainerStructs>`
    background-color: ${(props) => props.backgroundColor};
    max-width: 80rem;
    margin: auto;
    border-radius: 8px;
    margin: 13px;
    
`;
export const CategoryContainerMobile = styled.a<CategoryContainerStructs>`
    color: #fff;
    background-color: ${(props) => props.backgroundColor};
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
    &> img{
        filter: brightness(10000%);
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
`;

export const SubcategoryMobileLink = styled(Link)`
    background-color: #fff;
    width: 45%;
    height: 51px;
    border: 2px solid #990707;
    border-radius: 8px;
    margin: 5px;
    color: #990707;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
`;
