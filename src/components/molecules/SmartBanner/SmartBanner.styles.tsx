import styled from 'styled-components';

export const SmartBannerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 10.4rem;
    min-height: 10.4rem;
    width: 100vw;
    padding: 1rem;
    background-color: #fff;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 5;
`;

export const SmartBannerInfoContainer = styled.div`
    h2{
        font-size: 14px;
        line-height: 18px;
        font-weight: 400;
        color: #626262;
        margin: 5px 0 16px 12px;
    }
`;

export const SmartBannerBtnContainer = styled.div`
    display: flex;
    width: 100%;
    gap: 28px;
    padding-right: 1rem;
`;

export const SmartBannerTitleContainer = styled.div`
    display: flex;
    align-items: center;

    h2{
        font-size: 20px;
        line-height: 23px;
        font-weight: 500;
        color: #1a1a1a;
        margin-left: .5rem;
        margin-bottom: 7px;
    }

    img{
        width: 32px;
        height: 32px;
    }
`;
