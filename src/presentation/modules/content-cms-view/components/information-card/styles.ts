import Image from 'next/image';
import Link from 'next/link';
import styled, { css } from 'styled-components';

export const CardItem = styled(Link)<{ color: string }>`
  border-radius: ${({ theme: { radius } }) => radius.xsm};
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: ${({ theme: { spacing } }) => spacing[250]};
  background-color: white;
  box-shadow: 0 4px 4px 0 rgba(37, 39, 39, 0.12);
  cursor: pointer;
  margin: 4px;

  &:hover {
    ${(props) => {
      if (props.color)
        return css`
          border: 1px solid ${props.color};
        `;
    }}
  }
`;

export const Title = styled.strong`
  font-size: ${({ theme: { fontSize } }) => fontSize[300]};
  color: ${({ theme: { colors } }) => colors.neutral.high};
`;

export const IconElement = styled(Image)`
  width: 50px;
  height: 50px;
  margin-right: 20px;
`;

export const Description = styled.span<{ color?: string }>`
  font-size: ${({ theme: { fontSize } }) => fontSize[100]};
  font-weight: 700;
  ${(props) =>
    props?.color
      ? css`
          color: ${props.color};
        `
      : css`
          color: ${({ theme: { colors } }) => colors.neutral.high};
        `};
`;
