export const formatDateToString = (date, zero) => {
  const d = new Date(date);
  let month = '' + (d.getMonth() + 1);
  let day = '' + d.getDate();
  let year = d.getFullYear();
  day = day.padStart(2, '0');
  if (zero === 2) month = month.padStart(2, '0');

  return [year, month, day].join('-');
};

export const formatDateToObj = (date) => {
  const [year, month, day] = date.split('-');
  const newDate = new Date(Number(year), Number(month) - 1, Number(day));
  return newDate;
};

export const createArrayOfDates = (startDate, endDate) => {
  const result = [];
  while (startDate <= endDate) {
    result.push(formatDateToString(startDate));

    startDate.setDate(startDate.getDate() + 1);
  }

  return result;
};

export const countDays = (startDate, endDate) => {
  if (typeof startDate === 'string' && typeof endDate === 'string') {
    const oneDay = 24 * 60 * 60 * 1000;
    const objStartDate = formatDateToObj(startDate);
    const objEndDate = formatDateToObj(endDate);
    const diffDays = Math.round(Math.abs((objStartDate - objEndDate) / oneDay));
    return diffDays;
  }
  if (typeof startDate === 'object' && typeof endDate === 'object') {
    const oneDay = 24 * 60 * 60 * 1000;
    const diffDays = Math.round(Math.abs((startDate - endDate) / oneDay));
    return diffDays;
  }
  return 0;
};
