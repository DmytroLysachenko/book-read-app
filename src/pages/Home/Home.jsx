import { useSelector } from 'react-redux';
import { GoalsCounter } from '../../components/GoalsCounter/GoalsCounter';
import { StartTrainingForm } from '../../components/StartTrainingForm/StartTrainingForm';
import { selectCurrentPlanning } from '../../redux/books/selectors';
import { PlanningBookList } from '../../components/PlanningBookList/PlanningBookList';
import { LineChart } from '@mui/x-charts';

export const Home = () => {
  const planning = useSelector(selectCurrentPlanning);
  return (
    <div className="h-noHeaderMob overflow-y-scroll py-5">
      {planning && <GoalsCounter planning={planning} />}
      {planning && <PlanningBookList books={planning.books} />}
      {planning && (
        <LineChart
          xAxis={[
            { scaleType: 'point', data: planning.stats.map((x) => x.time) },
          ]}
          series={[
            {
              data: planning.stats.map((x) => x.pagesCount),
            },
          ]}
          width={500}
          height={300}
          colors={{}}
        />
      )}
    </div>
  );
};
