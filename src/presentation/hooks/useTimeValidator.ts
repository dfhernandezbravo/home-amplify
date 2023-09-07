export type TimeValidatorTypes = {
  endDate: string;
  startDate: string;
  isActive: boolean;
};

export const useTimeValidator = (dates: TimeValidatorTypes): boolean => {
  const countryOffSet = -240;
  const { startDate, endDate, isActive } = dates;
  const isStart = Boolean(startDate);
  const isEnd = Boolean(endDate);

  const convertCLTimeZone = (dateString: string | Date) => {
    const date = new Date(dateString);
    const localOffset = date.getTimezoneOffset();
    const chileOffset = countryOffSet;
    date.setMinutes(date.getMinutes() - (localOffset - chileOffset));
    return date;
  };

  const dateNow = convertCLTimeZone(new Date()).getTime();
  const valueStartDate = convertCLTimeZone(startDate).getTime();
  const valueEndDate = convertCLTimeZone(endDate).getTime();

  if (isActive) {
    if (isStart && isEnd)
      return dateNow >= valueStartDate && dateNow < valueEndDate;
    if (isStart && !isEnd) return dateNow >= valueStartDate;
    if (!isStart && isEnd) return dateNow < valueEndDate;
    if (!isStart && !isEnd) return true;
    return true;
  } else return false;
};
