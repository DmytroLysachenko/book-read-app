import {
  ChartsAxis,
  LineChart,
  lineElementClasses,
  markElementClasses,
} from '@mui/x-charts';
import { createArrayOfDates, formatDateToObj } from '../../helpers/formatDate';
import {
  countPagesPerDay,
  planPagesCurve,
} from '../../helpers/countPagesPerDay';

export const ChartPlanning = ({ planning }) => {
  const startDate = formatDateToObj(planning.startDate);
  const today = new Date();
  const passedTimeArray = createArrayOfDates(startDate, today);
  const readPages = countPagesPerDay(passedTimeArray, planning);
  const planCurve = planPagesCurve(planning, passedTimeArray, readPages);
  return (
    <div className="mx-auto w-70 bg-white shadow-chart mt-8 relative">
      <h2 className="text-xs uppercase absolute left-6 top-6">
        Amont of pages / DAY{' '}
        <span className="inline-flex ml-1 bg-google_white w-4 h-4 items-center justify-center">
          {planCurve[planCurve.length - 1]}
        </span>
      </h2>
      <LineChart
        xAxis={[{ scaleType: 'point', data: passedTimeArray }]}
        series={[
          {
            data: readPages,
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
