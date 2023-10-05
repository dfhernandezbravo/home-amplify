import Link from 'next/link';
import styled, { css } from 'styled-components';

export const CardItem = styled(Link)<{ color: string }>`
  border-radius: ${({ theme: { radius } }) => radius.xsm};
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: center;
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

export const BolderElement = styled.b`
  font-size: 16px;
  color: #1a1a1a;
`;
export const HighlitedElement = styled.span`
  font-size: 13px;
  font-weight: 700;
`;

export const IconElement = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 20px;
`;

export const Description = styled.span<{ color?: string }>`
  color: ${(props) => props.color};
`;

export const NormalText = styled.span`
  color: #1a1a1a;
  font-size: 13px;
`;

export const ContainerSwiper = styled.div`
  margin: auto;
  margin-bottom: 30px;
  margin-top: 40px;
`;
