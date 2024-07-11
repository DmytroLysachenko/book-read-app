import { useDispatch, useSelector } from 'react-redux';
import { MyGoals } from '../../components/MyGoals/MyGoals';
import {
  selectCurrentPlanning,
  selectGoingToReadBooks,
  selectIsLoading,
} from '../../redux/books/selectors';
import { PlanningBookList } from '../../components/PlanningBookList/PlanningBookList';
import { ChartPlanning } from '../../components/ChartPlanning/ChartPlanning';
import { useEffect, useState } from 'react';
import { AddButton } from '../../components/AddButton/AddButton';
import { AddTrainingForm } from '../../components/AddTrainingForm/AddTrainingForm';
import { Button } from '../../components/Button/Button';
import { startPlanningThunk } from '../../redux/books/operations';
import { countDays } from '../../helpers/formatDate';
import { YearCountDown } from '../../components/YearCountDown/YearCountDown';

export const Home = () => {
  const dispatch = useDispatch();
  const planning = useSelector(selectCurrentPlanning);
  const isLoading = useSelector(selectIsLoading);
  const goingToReadBooks = useSelector(selectGoingToReadBooks);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newPlanning, setNewPlanning] = useState({
    startDate: null,
    endDate: null,
    books: [],
  });

  const setNewPlanningStartDate = (date) => {
    newPlanning.startDate = date;
  };
  const setNewPlanningEndDate = (date) => {
    newPlanning.endDate = date;
  };
  const addNewPlanningBook = (bookId) => {
    if (!newPlanning.books.includes(bookId)) {
      setNewPlanning((prev) => {
        const { startDate, endDate, books } = prev;
        books.push(bookId);
        return { startDate, endDate, books };
      });
    }
  };
  const removeNewPlanningBook = (bookId) => {
    if (newPlanning.books.includes(bookId)) {
      setNewPlanning((prev) => {
        const { startDate, endDate, books } = prev;
        const index = books.indexOf(bookId);
        books.splice(index, 1);
        return { startDate, endDate, books };
      });
    }
  };

  const openAddModal = () => {
    setIsAddModalOpen(true);
  };
  const closeAddModal = () => {
    setIsAddModalOpen(false);
  };
  return (
    <div className="h-noHeaderMob overflow-y-scroll py-5">
      <YearCountDown />
      {!isAddModalOpen && !planning && (
        <>
          <MyGoals
            books={newPlanning.books.length}
            days={countDays(newPlanning.startDate, newPlanning.endDate)}
          />
          <PlanningBookList
            books={goingToReadBooks.filter((book) =>
              newPlanning.books.includes(book._id)
            )}
            removeNewPlanningBook={removeNewPlanningBook}
          />
          <button
            type="button"
            className="mx-auto my-8 px-9 py-3 bg-orangeBtn text-white block"
            onClick={() => {
              dispatch(startPlanningThunk(newPlanning));
              setNewPlanning({
                startDate: null,
                endDate: null,
                books: [],
              });
            }}
          >
            Start Training
          </button>
        </>
      )}

      {!planning && !isAddModalOpen && <AddButton openModal={openAddModal} />}
      {isAddModalOpen && !planning && (
        <AddTrainingForm
          closeModal={closeAddModal}
          setNewPlanningStartDate={setNewPlanningStartDate}
          setNewPlanningEndDate={setNewPlanningEndDate}
          addNewPlanningBook={addNewPlanningBook}
          newPlanning={newPlanning}
        />
      )}
    </div>
  );
};
