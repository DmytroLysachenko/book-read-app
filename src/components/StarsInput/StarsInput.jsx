import { Field } from 'formik';

export const StarsInput = ({ values }) => {
  const starInputClass = (inputValue, ratingValue) =>
    'mask mask-star' + (ratingValue < inputValue ? ' bg-gray-300' : '');
  return (
    <>
      <h2 id="rating-title">Choose rating of the book</h2>
      <div
        className="rating"
        role="group"
        aria-labelledby="rating-title"
      >
        <Field
          type="radio"
          name="rating"
          value={1}
          className={starInputClass(1, values.rating)}
        />
        <Field
          type="radio"
          name="rating"
          className={starInputClass(2, values.rating)}
          value={2}
        />
        <Field
          type="radio"
          name="rating"
          className={starInputClass(3, values.rating)}
          value={3}
        />
        <Field
          type="radio"
          name="rating"
          className={starInputClass(4, values.rating)}
          value={4}
        />
        <Field
          type="radio"
          name="rating"
          className={starInputClass(5, values.rating)}
          value={5}
        />
      </div>
    </>
  );
};
