import { ActiveAmountCounter } from '../ActiveAmountCounter/ActiveAmountCounter';

export const MyGoalsActive = ({ planning }) => {
  const booksRead = planning.books.reduce((acc, book) => {
    if (book.pagesTotal !== book.pagesFinished) {
      return ++acc;
    }
    return acc;
  }, 0);
  return (
    <div className="w-70 mx-auto shadow-book mt-10">
      <div className=" bg-gray_heading h-15 flex items-center justify-center">
        <h2 className="font-semibold text-xl text-center text-white">
          My goals
        </h2>
      </div>
      <div className="bg-white flex gap-5 justify-center py-8 ">
        <ActiveAmountCounter
          number={planning.books.length}
          title={'Amount of books'}
        />
        <ActiveAmountCounter
          number={planning.duration}
          title={'Amount of days'}
        />
        <ActiveAmountCounter
          number={booksRead}
          title={'Books lefts'}
        />
      </div>
    </div>
  );
};
