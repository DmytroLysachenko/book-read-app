import { PlanningBookItem } from '../PlanningBookItem/PlanningBookItem';

export const PlanningBookList = ({ books, removeNewPlanningBook, type }) => {
  return (
    <>
      <div className="divider m-0 w-70 mx-auto h-px mt-8"></div>
      <ul className="flex flex-col gap-4 ">
        {books.length > 0 ? (
          books.map((book) => (
            <PlanningBookItem
              key={book._id}
              book={book}
              removeNewPlanningBook={removeNewPlanningBook}
              type={type}
            />
          ))
        ) : (
          <PlanningBookItem
            book={{
              title: '...',
              author: '...',
              publishYear: '...',
              pagesTotal: '...',
            }}
          />
        )}
      </ul>
    </>
  );
};
