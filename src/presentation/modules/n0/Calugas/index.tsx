import { Fragment } from "react";
import { CalugaStruct, ContainerStruct } from "./Calugas.types";
import N0Title from "../N0Title";
import { Wrapper } from "./Calgugas.styles";
import ImageCard from "./componets/ImageCard";
import TextCard from "./componets/TextCard";
import ButtonCard from "./componets/ButtonCard";

const Calugas = ( props : CalugaStruct) => {

  const { title, itemsPerRow, container } = props;
  
console.log(container);

  return (
    <Fragment>
      { title && <N0Title text={title} />}
      <Wrapper>
        {container.map((item: ContainerStruct, index: number)=>(
          <Fragment key={index}>
            {item.image[0].image.length > 0 ? <ImageCard container={item}/> : null}
            {item.text[0].content.length > 0 ? <TextCard  container={item}/> : null}
            {item.button[0].textColor.length > 0 ? <ButtonCard container={item}/> : null}
          </Fragment>
        ))}
      </Wrapper>
    </Fragment>
  )
}

export default Calugas;