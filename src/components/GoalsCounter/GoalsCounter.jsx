import { AmountCounter } from '../AmountCounter/AmountCounter';

export const GoalsCounter = ({ planning }) => {
  return (
    <div className="w-70 mx-auto shadow-book">
      <div className=" bg-gray_heading h-15 flex items-center justify-center">
        <h2 className="font-semibold text-xl text-center text-white">
          My goals
        </h2>
      </div>
      <div className="bg-white flex gap-5 justify-center py-11 px-">
        <AmountCounter
          number={planning.books.length}
          title={'books'}
        />
        <AmountCounter
          number={planning.duration}
          title={'days'}
        />
      </div>
    </div>
  );
};
