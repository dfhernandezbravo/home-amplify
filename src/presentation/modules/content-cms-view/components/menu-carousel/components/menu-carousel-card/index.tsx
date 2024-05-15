import {
  ItemContent,
  ShapeTypes,
} from '@/domain/entities/content/content.types';
import { Card, CardTitle, ImageCardContainer, ImageIcon } from './style';
import useRedirectLink from '@/presentation/hooks/useRedirectLink';
import LazyLoad from 'react-lazyload';

interface Props {
  item: ItemContent;
  shape: ShapeTypes;
}

const MenuCarouselCard = ({ shape, item }: Props) => {
  const { redirect } = useRedirectLink();

  return (
    <Card shape={shape} href={redirect(item.link)}>
      <ImageCardContainer shape={shape}>
        <LazyLoad throttle={300} height={300}>
          <ImageIcon
            src={item.image}
            width={0}
            height={0}
            sizes="100vh"
            alt={item.title}
          />
        </LazyLoad>
      </ImageCardContainer>
      <CardTitle>
        <span>{item.title}</span>
      </CardTitle>
    </Card>
  );
};

export default MenuCarouselCard;
