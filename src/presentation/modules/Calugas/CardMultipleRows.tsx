/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import { Fragment, useEffect, useState } from "react";
import { CalugaStruct, ItemStruct } from "./Calugas.types";
import { Container, ContainerSlider, GroupContainer, MultipleRowContainer, RootContainer, SingleRowContainer } from "./CardMultipleRow.styles";
import useBreakpoints from "@/presentation/hooks/useBreakpoints";

const CardMultipleRows = (props: CalugaStruct) => {
  const [cardMultiRow, setCardMultiRow] = useState<ItemStruct>();
  const [cardsSingleRow, setCardsSingleRow] = useState<ItemStruct[]>([]);
  const { isSm, isMd, isLg } = useBreakpoints();
  const { items } = props;
  const widthMultiRow = '100%';
  const widthSingleRow = '50%'

  useEffect(() => {
    if (items?.length > 0) {
      setCardMultiRow(items.find(i => i.rows === 2))
      setCardsSingleRow(items.filter(i => i.rows !== 2))
    }
  }, [items])

  console.log({ isSm, isMd, isLg })



  return (
    <Fragment>
      {(isLg || isMd) && (
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
              {cardsSingleRow?.length > 0 && cardsSingleRow?.slice(0, 2)?.map((card: ItemStruct, index: number) => (
                <img
                  src={card.image}
                  width={widthSingleRow}
                  alt={card.alt}
                />
              ))}
            </GroupContainer>
            <GroupContainer>
              {cardsSingleRow?.length > 0 && cardsSingleRow?.slice(2, 4)?.map((card: ItemStruct, index: number) => (
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
      )}
      {(isSm || !isSm && !isMd && !isLg) && (
        <ContainerSlider>
           <MultipleRowContainer>
            {cardMultiRow && (
              <img
                src={cardMultiRow.mobileImage}
                width={widthMultiRow}
                alt={cardMultiRow.alt}
              />
            )}
          </MultipleRowContainer>
        </ContainerSlider>
      )}
      
    </Fragment>
  )
};
export default CardMultipleRows;