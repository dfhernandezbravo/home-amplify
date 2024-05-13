import { ContainerStruct } from '../../Calugas.types';
import { Text, Wrapper } from './TextCard.styles';

type PropsStruct = {
  container: ContainerStruct;
};

const TextCard = (props: PropsStruct) => {
  const { container } = props;
  const text = container.text[0];
  const { bolder, content, fontSize, textColor } = text;

  const {
    leftLine,
    rightLine,
    underLine,
    lineColor,
    borderColor,
    bgColor,
    width,
  } = container;

  const cardConfig = {
    width,
    $borderColor: borderColor,
    $bgColor: bgColor,
  };

  const textConfig = {
    bolder,
    $fontSize: fontSize,
    $textColor: textColor,
    $leftLine: leftLine,
    $rightLine: rightLine,
    $underLine: underLine,
    $lineColor: lineColor,
  };

  return (
    <Wrapper {...cardConfig}>
      <Text $textConfig={textConfig}>{content}</Text>
    </Wrapper>
  );
};

export default TextCard;
