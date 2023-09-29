import useBreakpoints from './useBreakpoints';

export const onDate = (endDate: string) => {
  const isFinished = new Date(endDate);
  return isFinished.getTime() - Date.now() < 0;
};

export const IsMobile = () => {
  const { isSm, isXs } = useBreakpoints();
  return isXs || isSm;
};

export const IsDesktop = () => {
  const { isLg, isMd } = useBreakpoints();
  return isLg || isMd;
};

export const calculateDiscount = (price: number, oldPrice: number) => {
  const discountPercentage = ((100 - price * 100) / oldPrice).toFixed();
  return discountPercentage;
};

export const formatPrice = (num: number) => {
  return (num / 1000).toFixed(3);
};
