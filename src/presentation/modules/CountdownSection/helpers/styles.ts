export const borderAssign = (index: number, quantity: number) => {
  const defaultBorder = { border: 'none' };
  const borderColor = '1px solid #ccc';
  if (quantity === 1) return defaultBorder;
  if (quantity > 2) {
    switch (index) {
      case 1:
        return { borderRight: borderColor };
      case 3:
        return { borderLeft: borderColor };
      default:
        return defaultBorder;
    }
  }
  return defaultBorder;
};
