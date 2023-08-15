/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import { Fragment, useEffect, useState } from "react";
import { CalugaStruct, ItemStruct } from "./Calugas.types";
import { Container, GroupContainer, MultipleRowContainer, RootContainer, SingleRowContainer } from "./CardMultipleRow.styles";

const CardMultipleRows = (props: CalugaStruct) => {
  const [cardMultiRow, setCardMultiRow] = useState<ItemStruct>();
  const [cardsSingleRow, setCardsSingleRow] = useState<ItemStruct[]>([]);
  console.log("length:", props?.items?.length)
  const { items } = props;
  const widthMultiRow = '100%';
  const widthSingleRow = '50%'

  console.log(cardMultiRow)
  useEffect(() => {
    if (items?.length > 0) {
      setCardMultiRow(items.find(i => i.rows === 2))
      setCardsSingleRow(items.filter(i => i.rows !== 2))
    }
  }, [items])

  return (
    <Container>
      <RootContainer>
      <MultipleRowContainer>
        {cardMultiRow && (
          <img
            src={cardMultiRow.image}
            width={widthMultiRow}
            alt={cardMultiRow.alt}
          />
        )}
      </MultipleRowContainer>
      <SingleRowContainer>
        <GroupContainer>
        {cardsSingleRow?.length > 0 && cardsSingleRow?.slice(0,2)?.map((card: ItemStruct, index: number) => (
          <img
            src={card.image}
            width={widthSingleRow}
            alt={card.alt}
          />
        ))}
        </GroupContainer>
        <GroupContainer>
        {cardsSingleRow?.length > 0 && cardsSingleRow?.slice(2,4)?.map((card: ItemStruct, index: number) => (
          <img
            src={card.image}
            width={widthSingleRow}
            alt={card.alt}
          />
        ))}
        </GroupContainer>
      </SingleRowContainer>
      </RootContainer>
    </Container>
  )
};
export default CardMultipleRows;