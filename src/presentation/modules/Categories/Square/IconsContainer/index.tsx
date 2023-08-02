/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { ItemStruct } from '../../Categories.types';
import { Icon, IconsWrapper } from './IconsContainer.styles';
import useAnalytics from '@/presentation/hooks/useAnalytics';

type IconsStruct = {
  items: ItemStruct[];
  indexArray: number;
};

const IconsContainer = ({ items, indexArray }: IconsStruct) => {
  const {
    methods: { sendPromotionClickEvent },
  } = useAnalytics();

  const index = indexArray * 2;

  const handleCategoryClick = (item: ItemStruct, index: number) => {
    const promotions = [
      {
        id: 'Burbuja',
        name: `${item.title}`,
        creative: `${item.image}`,
        position: `Burbuja ${index + 1}`,
      },
    ];

    sendPromotionClickEvent({
      event: 'promotionClick',
      ecommerce: {
        promoClick: {
          promotions,
        },
      },
    });
  };

  return (
    <IconsWrapper>
      <Icon>
        <Link
          href={items[index].link}
          onClick={(e) => {
            e.stopPropagation();
            handleCategoryClick(items[index], index);
          }}
        >
          <img src={items[index].image} alt={items[index].title} />
          <p>{items[index].title}</p>
        </Link>
      </Icon>

      <Icon>
        <Link
          href={items[index + 1].link}
          onClick={(e) => {
            e.stopPropagation();
            handleCategoryClick(items[index + 1], index);
          }}
        >
          <img src={items[index + 1].image} alt={items[index + 1].title} />
          <p>{items[index + 1].title}</p>
        </Link>
      </Icon>
    </IconsWrapper>
  );
};

export default IconsContainer;
