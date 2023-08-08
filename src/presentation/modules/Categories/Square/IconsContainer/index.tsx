/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { ItemStruct } from '../../Categories.types';
import { Icon, IconsWrapper } from './IconsContainer.styles';
import useLinks from '@/presentation/hooks/useLink';

type IconsStruct = {
  items: ItemStruct[];
  indexArray: number;
};

const IconsContainer = ({ items, indexArray }: IconsStruct) => {
  const { getLink, sendEvent } = useLinks();
  const index = indexArray * 2;
  return (
    <IconsWrapper>
      <Icon>
        <Link
          href={getLink(items[index].link)}
          onClick={() => sendEvent(items[index].link)}
        >
          <img src={items[index].image} alt={items[index].title} />
          <p>{items[index].title}</p>
        </Link>
      </Icon>

      <Icon>
        <Link
          href={getLink(items[index + 1].link)}
          onClick={() => sendEvent(items[index + 1].link)}
        >
          <img src={items[index + 1].image} alt={items[index + 1].title} />
          <p>{items[index + 1].title}</p>
        </Link>
      </Icon>
    </IconsWrapper>
  );
};

export default IconsContainer;
