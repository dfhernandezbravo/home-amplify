export type TimeValidatorTypes = {
  endDate: string;
  startDate: string;
  isActive: boolean;
};

type DateValues = {
  dateNow: number;
  valueStartDate: number;
  valueEndDate: number;
};

const getResultWhenTrue = (end: boolean, values: DateValues): boolean => {
  const { dateNow, valueStartDate, valueEndDate } = values;
  if (end) return dateNow >= valueStartDate && dateNow < valueEndDate;
  return dateNow >= valueStartDate;
};

const checkDateValues = (
  start: boolean,
  end: boolean,
  values: DateValues,
): boolean => {
  const { dateNow, valueEndDate } = values;
  if (start && end) {
    getResultWhenTrue(end, values);
  }
  if (!start && end) {
    return dateNow < valueEndDate;
  }
  return true;
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

  const values = {
    dateNow,
    valueStartDate,
    valueEndDate,
  };

  if (isActive) {
    return checkDateValues(isStart, isEnd, values);
  } else return false;
};
