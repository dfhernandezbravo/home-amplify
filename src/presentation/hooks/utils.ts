import useBreakpoints from './useBreakpoints';

export const onDate = (endDate: string) => {
  const isFinished = new Date(endDate);
  const now = Date.now();
  return isFinished.getTime() - Date.now() < 0;
};

export const IsMobile = () => {
  const { isSm, isXs } = useBreakpoints();
  return isXs || isSm;
};
