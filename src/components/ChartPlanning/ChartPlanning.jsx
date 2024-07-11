import { LineChart } from '@mui/x-charts';
import { createArrayOfDates, formatDateToObj } from '../../helpers/formatDate';

export const ChartPlanning = ({ planning }) => {
  console.log(planning);
  const startDate = formatDateToObj(planning.startDate);

  const endDate = formatDateToObj(planning.endDate);

  const planningArray = createArrayOfDates(startDate, endDate);

  return (
    <div className="mx-auto w-70 ">
      <LineChart
        xAxis={[{ scaleType: 'point', data: planningArray }]}
        series={[
          {
            data: planning.stats.map((x) => x.pagesCount),
            label: 'act',
          },
          {
            data: planning.stats.map((x) => x.pagesCount),
            label: 'plan',
          },
        ]}
        width={236}
        height={190}
      />
    </div>
  );
};
