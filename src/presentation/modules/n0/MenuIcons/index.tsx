import { Fragment } from 'react';
import { MenuIconsStruct } from './MenuIcons.types';
import N0Title from '../N0Title';
import { Wrapper } from './MenuIcons.styles';
import IconCard from './components/IconCard';
import { isDateInRange } from '@/presentation/hooks/useTimeValidator';

const MenuIcons = (props: MenuIconsStruct) => {
  const { title, itemsPerRow, items, isActive, startDate, endDate } = props;

  if (!isActive || !isDateInRange(startDate, endDate)) {
    return null;
  }

  return (
    <Fragment>
      {title && <N0Title text={title} />}

      <Wrapper columns={itemsPerRow}>
        {items.map((item, index) => (
          <IconCard item={item} key={index} />
        ))}
      </Wrapper>
    </Fragment>
  );
};

export default MenuIcons;
