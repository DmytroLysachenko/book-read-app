export const formatDateToString = (date) => {
  const d = new Date(date);
  let month = '' + (d.getMonth() + 1);
  let day = '' + d.getDate();
  let year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
};

export const formatDateToObj = (date) => {
  const [year, month, day] = date.split('-');
  console.log(Number(year), Number(month), Number(day));
  const newDate = new Date(Number(year), Number(month) - 1, Number(day));
  return newDate;
};

export const createArrayOfDates = (startDate, endDate) => {
  const result = [];
  while (startDate <= endDate) {
    result.push(formatDateToString(startDate));
    console.log(result);
    startDate.setDate(startDate.getDate() + 1);
  }
};
