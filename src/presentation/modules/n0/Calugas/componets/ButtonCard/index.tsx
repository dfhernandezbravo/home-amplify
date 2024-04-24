import { ContainerStruct } from '../../Calugas.types';
import { Wrapper } from './ButtonCard.style';
import Button from './components/Button';

interface PropsStruct {
  container: ContainerStruct;
}
const ButtonCard = (props: PropsStruct) => {
  const { container } = props;

  return (
    <Wrapper columns={container.columns} width={container.width}>
      {container.button.map((button, i) => (
        <Button key={`${i}-${button.label}`} button={button} />
      ))}
    </Wrapper>
  );
};

export default ButtonCard;
