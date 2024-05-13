import styled from 'styled-components';

export const SubTitle = styled.p<{
  $subtituleFontsize?: string;
  $position?: string;
  $colorSubtitle?: string;
}>`
  font-size: ${(props) => `${props.$subtituleFontsize}px`};
  text-align: ${(props) => props.$position};
  color: ${(props) => props.$colorSubtitle};
  font-weight: 700;
  line-height: 2;
  margin: 10px 0;

  @media (max-width: 780px) {
    padding: 0 1rem;
    line-height: 1;
  }
`;

export const Text = styled.p<{
  $textFontsize?: string;
  $colorText?: string;
}>`
  font-size: ${(props) => `${props.$textFontsize}px`};
  color: ${(props) => props.$colorText};
  text-align: center;
  line-height: 2;
  margin: 10px 0;

  @media (max-width: 780px) {
    padding: 0 1rem;
    line-height: 15px;
    font-size: 14px;
  }
`;
