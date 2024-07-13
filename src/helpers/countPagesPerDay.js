export const countPagesPerDay = (planningArray, planning) => {
  const readPagesObj = {};
  for (const date of planningArray) {
    readPagesObj[date] = planning.stats.reduce((acc, record) => {
      if (record.time.includes(date)) {
        return acc + record.pagesCount;
      }
      return acc;
    }, 0);
  }
  return Object.values(readPagesObj);
};

export const totalPagesRead = (day, readPages) => {
  let result = 0;
  for (let index = 0; index < day; index++) {
    result = result + readPages[index];
  }
  return result;
};

export const remainingDays = (planning, passedTimeArray) =>
  planning.duration + 1 - passedTimeArray.length;

export const totalPages = (planning) =>
  planning.books.reduce((acc, book) => acc + book.pagesTotal, 0);

export const planPagesCurve = (planning, passedTimeArray, readPages) => {
  const planCurve = Array(passedTimeArray.length).fill(planning.pagesPerDay);

  for (let index = 1; index < passedTimeArray.length; index++) {
    planCurve[index] =
      (totalPages(planning, passedTimeArray) -
        totalPagesRead(index, readPages)) /
      remainingDays(planning, passedTimeArray);
  }
  return planCurve;
};
