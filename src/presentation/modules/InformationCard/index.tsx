import { Fragment } from "react";
import { BolderElement, CardItem, Container, HighlitedElement, IconElement, NormalText } from "./InformationCard.styles";
import { CardItems, InformationCardStruct, TextItems, TextTypesStruct } from "./InformationCard.types";
import { useRouter } from "next/router";
import useLinks from "@/presentation/hooks/useLink";
import Link from "next/link";

const InformationCard = (props: InformationCardStruct) => {
  const { items } = props;
  const { getLink } = useLinks();
  const router = useRouter();

  const TextElement = ({ formatText, text, color }: { formatText: string, text: string, color: string }): JSX.Element => {
    const exp = "[n]"
    const eol = text?.includes(exp);

    const normalizeText = (t: string): string => {
      if(eol) return  t.replace(exp, "") 
      return t 
    }

    switch (formatText) {
      case TextTypesStruct.Bolder:
        return (
          <Fragment>
            <BolderElement>{normalizeText(text)}</BolderElement>
            {eol && <br />}
          </Fragment>
        )
      case TextTypesStruct.higlight:
        return (
          <Fragment>
            <HighlitedElement style={{ color: color }}>{normalizeText(text)}</HighlitedElement>
            {eol && <br />}
          </Fragment>
        )
      default:
        return (
          <Fragment>
            <NormalText>{normalizeText(text)}</NormalText>
            {eol && <br />}
          </Fragment>
        )
    }
  }

  return (
    <Container>
      {items?.length > 0 && items?.map((item: CardItems, index: number) => (
        <CardItem key={index} color={item.color}>
          <Link href={getLink(item.link)} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <IconElement
            src={item.icon}
          />
          <div>
            {item?.textItems?.length > 0 && item?.textItems?.map((elementItem: TextItems, _index: number) => (
              <div key={_index}>{TextElement({ formatText: elementItem.formatText, text: elementItem.text, color: item.color })}</div>
            ))}
          </div>
          </Link>
        </CardItem>
      ))}
    </Container>
  )
};
export default InformationCard;