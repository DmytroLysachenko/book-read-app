import { useDispatch, useSelector } from 'react-redux';

import {
  selectCurrentlyReadingBooks,
  selectFinishedReadingBooks,
  selectGoingToReadBooks,
  selectIsLoading,
} from '../../redux/books/selectors';
import { BookList } from '../../components/BooksList/BookList';
import { AddBookForm } from '../../components/AddBookForm/AddBookForm';
import { useMemo, useState } from 'react';
import { EmptyLibraryModal } from '../../components/EmptyLibraryModal/EmptyLibraryModal';
import { getUserDataThunk } from '../../redux/books/operations';
import { BookListTitle } from '../../components/BookListTitle/BookListTitle';
import { AddButton } from '../../components/AddButton/AddButton';
import { Link } from 'react-router-dom';

export const Library = ({ openReviewModal }) => {
  const dispatch = useDispatch();
  const goingToReadBooks = useSelector(selectGoingToReadBooks);
  const currentlyReadingBooks = useSelector(selectCurrentlyReadingBooks);
  const finishedReadingBooks = useSelector(selectFinishedReadingBooks);
  const isLoading = useSelector(selectIsLoading);
  const [isInitialModalOpen, setIsInitialModalOpen] = useState(false);
  const books = useMemo(
    () => [
      ...goingToReadBooks,
      ...currentlyReadingBooks,
      ...finishedReadingBooks,
    ],
    [goingToReadBooks, currentlyReadingBooks, finishedReadingBooks]
  );
  const [isAddModalOpen, setIsAddModalOpen] = useState(
    !isLoading && !books.length
  );
  console.log(!isLoading && !books.length);
  const closeInitialModal = () => {
    setIsInitialModalOpen(false);
  };
  const openAddModal = () => {
    setIsAddModalOpen(true);
  };
  const closeAddModal = () => {
    setIsAddModalOpen(false);
  };

  return (
    <div className="h-noHeaderMob overflow-auto flex flex-col items-center pb-20 relative z-0">
      {isInitialModalOpen && (
        <EmptyLibraryModal closeModal={closeInitialModal} />
      )}
      {Boolean(finishedReadingBooks.length) && !isAddModalOpen && (
        <>
          <BookListTitle title={'Already read'} />
          <BookList
            books={finishedReadingBooks}
            type={'finishedReading'}
            openReviewModal={openReviewModal}
          />
        </>
      )}
      {Boolean(currentlyReadingBooks.length) && !isAddModalOpen && (
        <>
          <BookListTitle title={'Reading now'} />
          <BookList
            books={currentlyReadingBooks}
            type={'currentlyReading'}
          />
        </>
      )}
      {Boolean(goingToReadBooks.length) && !isAddModalOpen && (
        <>
          <BookListTitle title={'Going to read'} />
          <BookList
            books={goingToReadBooks}
            type={'goingToRead'}
          />
        </>
      )}
      {!currentlyReadingBooks.length && !isAddModalOpen && (
        <>
          <Link
            to="/"
            className="bg-orangeBtn text-white font-semibold min-w-170px min-h-10 flex justify-center items-center mt-7"
          >
            My training
          </Link>
        </>
      )}
      {isAddModalOpen && <AddBookForm closeModal={closeAddModal} />}
      {Boolean(books.length) && !isAddModalOpen && (
        <AddButton openModal={openAddModal} />
      )}
    </div>
  );
};
