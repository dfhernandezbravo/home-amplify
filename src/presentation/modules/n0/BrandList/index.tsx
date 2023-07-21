/* eslint-disable @next/next/no-img-element */

import { Fragment } from "react"
import { Card, Wrapper } from "./BrandList.styles"
import { BrandListStruct } from "./BrandList.types"
import N0Title from "../N0Title";

const BrandList = ( props: BrandListStruct) => {

  const { title, itemPerRow, items } = props;

  return (
    <Fragment>
      { title && <N0Title text={title} />}
      <Wrapper>
        {items.map((item, index) =>(
          <Card key={index}>
            <img src={item.image} alt={item.alt}/>
          </Card>
        ))}
      </Wrapper>
    </Fragment>
  )
}

export default BrandList