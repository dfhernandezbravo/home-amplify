import styled from 'styled-components';

export const IconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-height: 148px;
  @media (max-width: 1024px) {
    flex-direction: column;
    max-height: 296px;
  }
`;

export const Icon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  width: 100%;
  height: 148px;
  border-top: 0.5px solid rgba(0, 0, 0, 0.15);
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.15);
  border-left: 0.25px solid rgba(0, 0, 0, 0.15);
  border-right: 0.25px solid rgba(0, 0, 0, 0.15);
  background-color: #fff;
  cursor: pointer;

  img {
    width: 90px;
    height: 90px;
    padding: 5px;
  }

  p,
  a {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #000;
  }

  @media (min-width: 1024px) {
    &:hover {
      background-color: #be0911;
      border: 0.5px solid transparent;
      p {
        color: #fff;
      }

      img {
        filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(2deg) brightness(109%) contrast(101%);
      }
    }
  }
`;
