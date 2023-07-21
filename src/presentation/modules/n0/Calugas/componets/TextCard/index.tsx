import Link from "next/link";
import { ContainerStruct } from "../../Calugas.types"
import { Text, Wrapper } from "./TextCard.styles";

type PropsStruct = {
    container: ContainerStruct;
}

const TextCard = (props : PropsStruct) => {

    const { container } = props;
    const text = container.text[0];


  return (
    <Wrapper width={container.width.toString()}>
    <Link href={container.link}>
        <Text>{text.content}</Text>
    </Link>
  </Wrapper>
  )
}

export default TextCard