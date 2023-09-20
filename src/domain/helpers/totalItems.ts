import { Item } from '../entities/shopping-cart/shopping-cart.entity';

const totalItems = (items: Item[]): number => {
  let sum = 0;
  for (const obj of items) {
    sum += obj.quantity;
  }
  return sum;
};

export default totalItems;
