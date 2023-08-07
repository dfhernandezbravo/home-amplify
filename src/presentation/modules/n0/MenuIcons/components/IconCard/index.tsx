/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import { ItemMenuIconsStruct } from '../../MenuIcons.types';
import { Card } from './IconCard.styles';
import useLinks from '@/presentation/hooks/useLink';

type ItemStruct = {
  item: ItemMenuIconsStruct;
};

const IconCard = (props: ItemStruct) => {
  const { item } = props;
  const { getLink, sendEvent } = useLinks();

  return (
    <Card>
      <Link href={getLink(item.link)} onClick={() => sendEvent(item.link)}>
        <img src={item.image} />
        <p>{item.title}</p>
      </Link>
    </Card>
  );
};

export default IconCard;
