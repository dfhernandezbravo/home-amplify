import styled from 'styled-components';

type ColorEfficiency = {
  'a++': string;
};

const colorEfficiency: ColorEfficiency = {
  'a++': '#42A539',
};

export const OverlayEfficiency = styled.div<{ color: keyof ColorEfficiency }>`
  width: 52px;
  height: 22px;
  clip-path: polygon(0% 0%, 80% 0%, 100% 50%, 80% 99%, 0% 100%);
  background: ${(props) => colorEfficiency[props.color]};
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 7px;
`;
