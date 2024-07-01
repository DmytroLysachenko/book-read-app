import { Field } from 'formik';
import { IoIosStar, IoIosStarOutline } from 'react-icons/io';
export const StarRadio = ({ rating, checked, dark }) => {
  return (
    <span className="relative block w-5 h-5 hover:-translate-y-1 hover:scale-110 ease-in-out duration-300">
      <Field
        type="radio"
        name="rating"
        value={rating}
        className="opacity-0 relative w-full h-full z-10 block"
      />
      {dark ? (
        <IoIosStar className="absolute left-0 top-0 w-full h-full text-placeholder_text" />
      ) : (
        <IoIosStarOutline className="absolute left-0 top-0 w-full h-full text-placeholder_text" />
      )}
    </span>
  );
};
