import { useDispatch, useSelector } from 'react-redux';

import {
  selectCurrentlyReadingBooks,
  selectFinishedReadingBooks,
  selectGoingToReadBooks,
} from '../../redux/books/selectors';
import { BookList } from '../../components/BooksList/BookList';
import { AddBookForm } from '../../components/AddBookForm/AddBookForm';
import { useEffect, useState } from 'react';
import { EmptyLibraryModal } from '../../components/EmptyLibraryModal/EmptyLibraryModal';
import { getUserDataThunk } from '../../redux/books/operations';

export const Library = () => {
  const dispatch = useDispatch();
  const goingToReadBooks = useSelector(selectGoingToReadBooks);
  const currentlyReadingBooks = useSelector(selectCurrentlyReadingBooks);
  const finishedReadingBooks = useSelector(selectFinishedReadingBooks);
  const isNotEmpty =
    goingToReadBooks.length ||
    currentlyReadingBooks.length ||
    finishedReadingBooks.length;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    dispatch(getUserDataThunk());
  }, [dispatch]);

  useEffect(() => {
    if (!isNotEmpty) {
      setIsModalOpen(true);
    }
  }, [isNotEmpty]);

  return (
    <div className="h-noHeaderMob overflow-y-scroll">
      {isModalOpen && <EmptyLibraryModal closeModal={closeModal} />}
      {Boolean(finishedReadingBooks.length) && (
        <BookList
          books={finishedReadingBooks}
          title={'Already read'}
        />
      )}
      {Boolean(currentlyReadingBooks.length) && (
        <BookList
          books={currentlyReadingBooks}
          title={'Reading now'}
        />
      )}
      {Boolean(goingToReadBooks.length) && (
        <BookList
          books={goingToReadBooks}
          title={'Going to read'}
        />
      )}
      {!isNotEmpty && <AddBookForm />}
    </div>
  );
};
