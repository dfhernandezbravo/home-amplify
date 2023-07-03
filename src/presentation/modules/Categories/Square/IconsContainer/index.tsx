/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { ItemStruct } from '../../Categories.types';
import { Icon, IconsWrapper } from './IconsContainer.styles';

type IconsStruct = {
  items: ItemStruct[];
  indexArray: number;
};

const IconsContainer = ({ items, indexArray }: IconsStruct) => {
  const index = indexArray * 2;
  return (
    <IconsWrapper>
      <Icon>
        <Link href={items[index].link}>
          <img src={items[index].image} alt={items[index].title} />
          <p>{items[index].title}</p>
        </Link>
      </Icon>

      <Icon>
        <Link href={items[index + 1].link}>
          <img src={items[index + 1].image} alt={items[index + 1].title} />
          <p>{items[index + 1].title}</p>
        </Link>
      </Icon>
    </IconsWrapper>
  );
};

export default IconsContainer;
