import { ContainerStruct } from '../../Calugas.types';

type PropsStruct = {
  container: ContainerStruct;
};

const ButtonCard = (props: PropsStruct) => {
  const { container } = props;

  return <div>ButtonCard</div>;
};

export default ButtonCard;
