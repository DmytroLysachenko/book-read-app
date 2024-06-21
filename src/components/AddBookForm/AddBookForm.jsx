import { Field, Form, Formik } from 'formik';
import { BsArrowLeft } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { addBookThunk } from '../../redux/books/operations';
export const AddBookForm = () => {
  const dispatch = useDispatch();
  return (
    <div className="px-5 py-6">
      <Formik
        initialValues={{
          title: '',
          author: '',
          publicationDate: '',
          pagesTotal: '',
        }}
        onSubmit={({ title, author, publicationDate, pagesTotal }, actions) => {
          dispatch(
            addBookThunk({ title, author, publicationDate, pagesTotal })
          );
          actions.resetForm();
        }}
      >
        <Form className=" flex flex-col gap-5 items-center">
          <button
            type="button"
            className="self-baseline"
          >
            <BsArrowLeft
              color="#FF6B08"
              className="w-6 h-6"
            />
          </button>
          <label
            className="flex flex-col gap-2 text-gray_text  text-sm mt-8"
            htmlFor="title"
          >
            Book title
            <Field
              type="text"
              name="title"
              placeholder="..."
              className="py-3 px-3 text-placeholder_text bg-google_white font-normal bg-transparent focus:bg-white active:shadow-input border border-solid border-gray_text active:border-transparent min-w-70"
            />
          </label>

          <label
            className="flex flex-col gap-2  text-gray_text  text-sm"
            htmlFor="author"
          >
            Author
            <Field
              type="text"
              name="author"
              placeholder="..."
              className="py-3 px-3 text-placeholder_text bg-google_white font-normal bg-transparent focus:bg-white active:shadow-input border border-solid border-gray_text  active:border-transparent min-w-70"
            />
          </label>
          <label
            className="flex flex-col gap-2 text-gray_text  text-sm"
            htmlFor="publicationDate"
          >
            Publication date
            <Field
              type="date"
              name="publicationDate"
              placeholder="..."
              className="py-3 px-3 text-placeholder_text bg-google_white font-normal bg-transparent focus:bg-white active:shadow-input border border-solid border-gray_text active:border-transparent min-w-70"
            />
          </label>
          <label
            className="flex flex-col gap-2 text-gray_text  text-sm"
            htmlFor="pagesTotal"
          >
            Amount of pages
            <Field
              type="number"
              name="pagesTotal"
              placeholder="..."
              className="py-3 px-3 text-placeholder_text bg-google_white font-normal bg-transparent focus:bg-white active:shadow-input border border-solid border-gray_text active:border-transparent min-w-70"
            />
          </label>
          <button
            className="py-3 px-16  border border-solid border-deep_blue min-w-170px mt-10"
            type="submit"
          >
            Add
          </button>
        </Form>
      </Formik>
    </div>
  );
};
