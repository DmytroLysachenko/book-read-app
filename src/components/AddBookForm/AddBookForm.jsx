import { Field, Form, Formik } from 'formik';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import { addBookThunk } from '../../redux/books/operations';
import DatePicker from 'react-datepicker';
import { useState } from 'react';
export const AddBookForm = ({ closeModal }) => {
  const dispatch = useDispatch();
  const labelClass = 'flex flex-col gap-2 text-gray_text  text-sm ';
  const [publicationYear, setPublicationYear] = useState(new Date());
  return (
    <div className="py-6 w-full h-full">
      <Formik
        initialValues={{
          title: '',
          author: '',
          pagesTotal: '',
        }}
        onSubmit={({ title, author, pagesTotal }, actions) => {
          dispatch(
            addBookThunk({
              title,
              author,
              publishYear: publicationYear.getFullYear(),
              pagesTotal,
            })
          );
          actions.resetForm();
          closeModal();
        }}
      >
        <Form className=" flex flex-col gap-5 items-center max-w-70 mx-auto">
          <button
            type="button"
            className="self-start"
            onClick={() => {
              closeModal();
            }}
          >
            <FaArrowLeftLong
              color="rgb(255 107 8)"
              className="w-6 h-6  "
            />
          </button>

          <label
            className={labelClass + 'mt-8'}
            htmlFor="title"
          >
            Book title
            <Field
              type="text"
              name="title"
              placeholder="..."
              className="py-3 px-3 h-42px text-deep_blue placeholder:text-placeholder_text  font-normal bg-transparent focus:bg-white focus:shadow-input border border-solid border-gray_text  min-w-70"
            />
          </label>

          <label
            className={labelClass}
            htmlFor="author"
          >
            Author
            <Field
              type="text"
              name="author"
              placeholder="..."
              className="py-3 px-3 h-42px text-deep_blue placeholder:text-placeholder_text  font-normal bg-transparent focus:bg-white focus:shadow-input border border-solid border-gray_text   min-w-70"
            />
          </label>
          <label
            className={labelClass}
            htmlFor="publicationDate"
          >
            Publication year
            <DatePicker
              selected={publicationYear}
              onChange={(value) => setPublicationYear(value)}
              showYearPicker
              dateFormat="yyyy"
              className="py-3 px-3 h-42px text-deep_blue placeholder:text-placeholder_text  font-normal bg-transparent focus:bg-white focus:shadow-input border border-solid border-gray_text  min-w-70"
            />
          </label>
          <label
            className={labelClass}
            htmlFor="pagesTotal"
          >
            Amount of pages
            <Field
              type="number"
              name="pagesTotal"
              placeholder="..."
              className="py-3 px-3 h-42px text-deep_blue placeholder:text-placeholder_text  font-normal bg-transparent focus:bg-white focus:shadow-input border border-solid border-gray_text  min-w-70"
            />
          </label>
          <button
            className="py-3 px-16 border border-solid border-deep_blue min-w-170px mt-10"
            type="submit"
          >
            Add
          </button>
        </Form>
      </Formik>
    </div>
  );
};
