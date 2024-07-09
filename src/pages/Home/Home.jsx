import { useSelector } from 'react-redux';
import { GoalsCounter } from '../../components/GoalsCounter/GoalsCounter';
import { StartTrainingForm } from '../../components/StartTrainingForm/StartTrainingForm';
import { selectCurrentPlanning } from '../../redux/books/selectors';
import { PlanningBookList } from '../../components/PlanningBookList/PlanningBookList';

export const Home = () => {
  const planning = useSelector(selectCurrentPlanning);
  return (
    <div className="h-noHeaderMob overflow-y-scroll py-5">
      <GoalsCounter planning={planning} />
      <PlanningBookList books={planning.books} />
    </div>
  );
};
