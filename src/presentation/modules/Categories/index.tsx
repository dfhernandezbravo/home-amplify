import { CategoriesStruct } from './Categories.types';
import CategoriesCircle from './Circle';
import CategoriesSquare from './Square';

const Categories = ({ items, variant }: CategoriesStruct) => {
  return variant === 'Circle' ? (
    <CategoriesCircle items={items} />
  ) : (
    <CategoriesSquare items={items} />
  );
};

export default Categories;
