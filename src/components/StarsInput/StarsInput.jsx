import { StarRadio } from '../StarRadio/StarRadio';

export const StarsInput = ({ _id, values }) => {
  const options = [1, 2, 3, 4, 5];
  return (
    <>
      <h2 id="rating-title">Choose rating of the book</h2>
      <div
        className="rating"
        role="group"
        aria-labelledby="rating-title"
      >
        {options.map((rating) =>
          rating <= values['rating-1'] ? (
            <StarRadio
              rating={rating}
              key={rating + _id}
              checked={true}
            />
          ) : (
            <StarRadio
              rating={rating}
              key={rating + _id}
              checked={false}
            />
          )
        )}
      </div>
    </>
  );
};
