import { Fragment } from "react";
import { ParagraphStruct } from "./Paragraph.types"
import N0Title from "../N0Title";
import { Text } from "./Paragraph.styles";

const Paragraph = (props : ParagraphStruct) => {

  const { title, text } = props;

  return (
    <Fragment>
      { title && <N0Title text={title} />}
      <Text>{text}</Text>
      
    </Fragment>
  )
}

export default Paragraph