import {
  ItemContent,
  ShapeTypes,
} from '@/domain/entities/content/content.types';
import { Card, CardTitle, ImageCardContainer, ImageIcon } from './style';

interface Props {
  item: ItemContent;
  shape: ShapeTypes;
}

const MenuCarouselCard = ({ shape, item }: Props) => {
  return (
    <Card shape={shape}>
      <ImageCardContainer shape={shape}>
        <ImageIcon
          src={item.image}
          width={0}
          height={0}
          sizes="100vh"
          alt={item.alt}
        />
      </ImageCardContainer>
      <CardTitle>
        <span>{item.title}</span>
      </CardTitle>
    </Card>
  );
};

export default MenuCarouselCard;
