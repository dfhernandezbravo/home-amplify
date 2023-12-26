/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import { ItemMenuIconsStruct } from '../../MenuIcons.types';
import { Card } from './IconCard.styles';
import useRedirectLink from '@/presentation/hooks/useRedirectLink';

type ItemStruct = {
  item: ItemMenuIconsStruct;
};

const IconCard = (props: ItemStruct) => {
  const { item } = props;
  const { redirect } = useRedirectLink();

  return (
    <Card>
      <Link href={redirect(item.link)}>
        <img src={item.image} alt={item.alt} />
        <p>{item.title}</p>
      </Link>
    </Card>
  );
};

export default IconCard;
