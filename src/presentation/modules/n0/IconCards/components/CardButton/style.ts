import styled from 'styled-components';
import Link from 'next/link';

export const Wrapper = styled.div<{
  bgColor: string;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  background-color: ${(props) => props.bgColor};
  min-height: 200px;
  border-radius: 10px;
  text-align: center;
  position: relative;
  margin: 50px 0px;

  @media (max-width: 800px) {
    width: 100%;
    margin-bottom: 0px;

    &:last-child {
      margin-bottom: 50px;
    }
  }
`;

export const Title = styled.p<{
  fontSize: string;
}>`
  color: #fff;
  font-size: ${(props) => `${props.fontSize}px`};
  font-weight: 700;
  margin: 0;
`;

export const Button = styled(Link)<{
  fontColor: string;
  btnColor: string;
}>`
  background-color: ${(props) => props.btnColor};
  color: ${(props) => props.fontColor};
  padding: 12px 50px;
  border-radius: 8px;
  margin: 20px 0px;
  cursor: pointer;
`;

export const Icon = styled.div`
  width: 140px;
  height: 140px;
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
  top: -70px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
`;
