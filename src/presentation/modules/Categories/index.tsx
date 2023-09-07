import { ShapeTypes } from './Categories.types';
import CategoriesSquare from './CategoriesSquare';
import { Fragment } from 'react';
import CategoriesCircle from './CategoriesCircle';
import { ContentBody } from '@/domain/entities/content/content.types';

const Categories = (props: ContentBody) => {
  return (
    <Fragment>
      {props.shape === ShapeTypes.SQUARE ? (
        <CategoriesSquare {...props} />
      ) : (
        <CategoriesCircle {...props} />
      )}
    </Fragment>
  );
};
export default Categories;
