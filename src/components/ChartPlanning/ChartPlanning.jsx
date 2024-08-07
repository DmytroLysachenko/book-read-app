import {
  LineChart,
  lineElementClasses,
  markElementClasses,
} from '@mui/x-charts';
import { createArrayOfDates, formatDateToObj } from '../../helpers/formatDate';
import {
  countPagesPerDay,
  planPagesCurve,
  totalPages,
} from '../../helpers/chartCalculations';
import { useMemo } from 'react';

export const ChartPlanning = ({ planning }) => {
  const startDate = formatDateToObj(planning.startDate);
  const today = new Date();
  const passedTimeArray = createArrayOfDates(startDate, today);
  const readPagesArray = countPagesPerDay(passedTimeArray, planning);
  const planCurve = planPagesCurve(planning, passedTimeArray, readPagesArray);
  const allPages = useMemo(() => totalPages(planning), [planning]);
  const readPages = useMemo(
    () => planning.stats.reduce((acc, record) => acc + record.pagesCount, 0),
    [planning.stats]
  );

  return (
    <div className="mx-auto w-70 bg-white shadow-chart mt-8 relative">
      <h2 className="text-xs uppercase absolute left-6 top-6">
        Amount of pages / DAY{' '}
        <span className="inline-flex ml-1 bg-google_white w-5 h-5 items-center justify-center">
          {Math.round(planCurve[planCurve.length - 1])}
        </span>
      </h2>
      <LineChart
        xAxis={[{ scaleType: 'point', data: passedTimeArray }]}
        series={[
          {
            data: readPagesArray,
            label: 'Act',
            color: 'orange',
          },
          {
            data: planCurve,
            label: 'Plan',
            color: 'black',
          },
        ]}
        width={280}
        height={190}
        sx={{
          [`& .${lineElementClasses.root}`]: {
            strokeWidth: 1,
          },
          [`& .${markElementClasses.root}`]: {
            scale: '0.5',
            strokeWidth: 1,
          },
        }}
        bottomAxis={{ disableTicks: true }}
        rightAxis={{ disableTicks: true }}
        leftAxis={{ disableTicks: true }}
      />
    </div>
  );
};
