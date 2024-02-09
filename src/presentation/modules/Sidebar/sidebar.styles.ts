import styled, { css, keyframes } from 'styled-components';

interface SidebarContainerProps {}
export const SidebarContainer = styled.div<SidebarContainerProps>`
  width: 100%;
  min-width: 197px;
  margin: 22px 17px 0 0;
  padding: 0;
  @media (max-width: 768px) {
    width: 20%;
    min-width: 197px;
  }
  order: 1;
  @media (max-width: 640px) {
    width: 100%;
    margin: 0;
    order: 2;
  }
`;
export const SidebarHeader = styled.div`
  margin-top: 0;
  color: #1a1a1a;
  p {
    font-size: 14px;
    margin-bottom: 3px;
    margin-top: 0.25rem;
    font-weight: 300;
    color: #000;
  }
  h1 {
    font-size: 18px;
  }
  margin-bottom: 48px;
  @media (max-width: 640px) {
    margin-bottom: 26px;
  }
`;
export const SidebarList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  border-radius: 8px;
  border: 1px solid #f2f2f2;
  box-sizing: border-box;
  background-color: #fff;
`;
const spin = keyframes`
    0%{transform: rotate(0deg);}
    100%{transform: rotate(360deg);}
`;
interface Props {
  loading: boolean;
}
export const ButtonContainer = styled.div<Props>`
  & .delete-card-button {
    position: relative;
    width: ${({ loading }) => loading && '108px'};
    font-size: ${({ loading }) => loading && '0'};
    ${({ loading }) =>
      loading &&
      css`
        &::before {
          content: '';
          position: absolute;
          top: 15%;
          left: 35%;
          display: block;
          border: 4px solid rgb(175, 19, 17);
          width: 25px;
          height: 25px;
          border-radius: 50%;
          border-left-color: #ffffff;
          animation: ${spin} 1s linear infinite;
        }
      `}
  }
`;
