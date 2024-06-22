import { BookItem } from '../BookItem/BookItem';
import { RatingBookItem } from '../RatingBookItem/RatingBookItem';

export const BookList = ({ books, title }) => {
  return (
    <>
      <h3>{title}</h3>
      <ul>
        {title === 'Going to read'
          ? books.map((book) => {
              book.readingNow = false;
              return (
                <BookItem
                  key={book.id}
                  book={book}
                />
              );
            })
          : title === 'Reading now'
          ? books.map((book) => {
              book.readingNow = true;
              return (
                <BookItem
                  key={book.id}
                  book={book}
                />
              );
            })
          : books.map((book) => {
              return (
                <RatingBookItem
                  key={book.id}
                  book={book}
                />
              );
            })}
      </ul>
    </>
  );
};
