import { ContentBody } from '@/domain/entities/content/content.types';
import { Fragment } from 'react';
import { ShapeTypes } from './Categories.types';
import CategoriesCircle from './CategoriesCircle';
import CategoriesSquare from './CategoriesSquare';

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
