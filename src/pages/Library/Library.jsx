import { useDispatch, useSelector } from 'react-redux';

import {
  selectCurrentlyReadingBooks,
  selectFinishedReadingBooks,
  selectGoingToReadBooks,
} from '../../redux/books/selectors';
import { BookList } from '../../components/BooksList/BookList';

export const Library = () => {
  const dispatch = useDispatch();
  const goingToReadBooks = useSelector(selectGoingToReadBooks);
  const currentlyReadingBooks = useSelector(selectCurrentlyReadingBooks);
  const finishedReadingBooks = useSelector(selectFinishedReadingBooks);

  return (
    <div className="bg-gray_bg max-h-noHeaderMob overflow-scroll">
      {finishedReadingBooks && (
        <BookList
          books={finishedReadingBooks}
          title={'Already read'}
        />
      )}
      {currentlyReadingBooks && (
        <BookList
          books={currentlyReadingBooks}
          title={'Reading now'}
        />
      )}
      {goingToReadBooks && (
        <BookList
          books={goingToReadBooks}
          title={'Going to read'}
        />
      )}
    </div>
  );
};
