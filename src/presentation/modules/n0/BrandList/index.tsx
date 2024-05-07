/* eslint-disable @next/next/no-img-element */

import { Fragment } from 'react';
import { Card, Wrapper } from './BrandList.styles';
import { BrandListStruct } from './BrandList.types';
import N0Title from '../N0Title';
import { isDateInRange } from '@/presentation/hooks/useTimeValidator';

const BrandList = (props: BrandListStruct) => {
  const { title, items, isActive, endDate, startDate } = props;

  if (!isActive || !isDateInRange(startDate, endDate)) {
    return null;
  }

  return (
    <Fragment>
      {title && <N0Title text={title} />}
      <Wrapper>
        {items.map((item, index) => (
          <Card key={index}>
            <img src={item.image} alt={item.alt} />
          </Card>
        ))}
      </Wrapper>
    </Fragment>
  );
};

export default BrandList;
