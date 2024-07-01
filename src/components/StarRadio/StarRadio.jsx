import { Field } from 'formik';

export const StarRadio = ({ rating, checked }) => {
  return (
    <>
      <Field name="rating-1">
        {() => (
          <input
            type="radio"
            name="rating-1"
            value={rating}
            className="mask mask-star"
            defaultChecked={checked}
          />
        )}
      </Field>
    </>
  );
};
