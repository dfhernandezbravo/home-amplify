import { ContentBody } from '@/domain/entities/content/content.types';
import useBreakpoints from '@/presentation/hooks/useBreakpoints';
import { Fragment } from 'react';

import Desktop from './Components/Desktop';
import Mobile from './Components/Mobile';

/**
 * @deprecated
 * @param props
 * @returns
 */

const QuickCategory = (props: ContentBody) => {
  const { isLg } = useBreakpoints();

  return (
    <Fragment>
      {isLg && <Desktop {...props} />}
      {!isLg && <Mobile {...props} />}
    </Fragment>
  );
};
export default QuickCategory;
