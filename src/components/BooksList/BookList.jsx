import { BookItem } from '../BookItem/BookItem';
import { RatingBookItem } from '../RatingBookItem/RatingBookItem';

export const BookList = ({ books, type }) => {
  return (
    <ul className="flex flex-col gap-4">
      {type === 'goingToRead'
        ? books.map((book) => {
            return (
              <BookItem
                key={book._id}
                book={book}
                readingNow={false}
              />
            );
          })
        : type === 'currentlyReading'
        ? books.map((book) => {
            return (
              <BookItem
                key={book._id}
                book={book}
                readingNow={true}
              />
            );
          })
        : books.map((book) => {
            return (
              <RatingBookItem
                key={book._id}
                book={book}
              />
            );
          })}
    </ul>
  );
};
