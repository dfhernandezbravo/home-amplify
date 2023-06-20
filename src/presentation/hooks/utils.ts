export const onDate = (endDate: string) => {
  const isFinished = new Date(endDate);
  const now = Date.now();
  return isFinished.getTime() - Date.now() < 0;
};
