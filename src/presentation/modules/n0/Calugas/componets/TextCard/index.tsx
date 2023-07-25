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
    borderColor,
    bgColor,
  };

  const textConfig = {
    bolder,
    fontSize,
    textColor,
    leftLine,
    rightLine,
    underLine,
    lineColor,
  };

  return (
    <Wrapper {...cardConfig}>
      <Text textConfig={textConfig}>{content}</Text>
    </Wrapper>
  );
};

export default TextCard;
