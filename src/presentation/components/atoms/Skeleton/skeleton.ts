import styled, { keyframes, css } from 'styled-components';

export const SkeletonAnimation = keyframes`
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: -100% 0;
  }`;

export const SkeletonComponent = styled.div<{
  width: string;
  height: string;
  top: number;
  right: number;
}>`
  ${(props) => css`
    width: ${props.width};
    height: ${props.height};
    top: ${props.top};
    right: ${props.right};
  `};
  left: 0;
  background-color: #f0f0f0;
  background-image: linear-gradient(
    90deg,
    rgb(236, 236, 236) 25%,
    rgb(245, 245, 245) 50%,
    rgb(236, 236, 236) 75%
  );
  background-size: 200% 100%;
  animation: ${SkeletonAnimation} 1.5s infinite;
  margin: auto;
  border-radius: 8px;
  position: absolute;
`;
