import { BookItem } from '../BookItem/BookItem';
import { RatingBookItem } from '../RatingBookItem/RatingBookItem';

export const BookList = ({ books, title }) => {
  return (
    <>
      <h3>{title}</h3>
      <ul className="flex flex-col">
        {title === 'Going to read'
          ? books.map((book) => {
              return (
                <BookItem
                  key={book._id}
                  book={book}
                  readingNow={false}
                />
              );
            })
          : title === 'Reading now'
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
    </>
  );
};
