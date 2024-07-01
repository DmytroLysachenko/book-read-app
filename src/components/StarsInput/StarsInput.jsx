import { StarRadio } from '../StarRadio/StarRadio';

export const StarsInput = ({ _id, values }) => {
  const options = [1, 2, 3, 4, 5];
  return (
    <>
      <h2 id="rating-title">Choose rating of the book</h2>
      <div
        role="group"
        aria-labelledby="rating-title"
        className="flex"
      >
        {options.map((rating) =>
          rating <= values.rating ? (
            <StarRadio
              rating={rating}
              key={rating + _id}
              dark={true}
              checked={rating === values.rating}
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
