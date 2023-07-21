/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { ItemMenuIconsStruct } from "../../MenuIcons.types"
import { Card } from "./IconCard.styles";

type ItemStruct = {
    item: ItemMenuIconsStruct;
}

const IconCard = ( props : ItemStruct) => {
    const { item } = props;

  return (
    <Card>
        <Link href={item.link}>
            <img src={item.image} />
            <p>{item.title}</p>
        </Link>
    </Card>
  )
}

export default IconCard