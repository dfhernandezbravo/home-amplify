import { Fragment } from 'react';
import { ParagraphStruct } from './Paragraph.types';
import N0Title from '../N0Title';
import { TextLine } from './components/TextLine';
import { isDateInRange } from '@/presentation/hooks/useTimeValidator';

const Paragraph = (props: ParagraphStruct) => {
  const { title, paragraph, isActive, endDate, startDate } = props;

  if (!isActive || !isDateInRange(startDate, endDate)) {
    return null;
  }

  return (
    <Fragment>
      {title && <N0Title text={title} />}
      {paragraph?.map((item, index) => (
        <TextLine key={index} {...item} />
      ))}
    </Fragment>
  );
};

export default Paragraph;
