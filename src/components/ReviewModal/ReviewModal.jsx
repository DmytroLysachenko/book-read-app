import { Field, Form, Formik } from 'formik';
import { StarsInput } from '../StarsInput/StarsInput';
import { Button } from '../Button/Button';

export const ReviewModal = () => {
  return (
    <>
      <Formik initialValues={{ rating: 2, review: '' }}>
        {({ values }) => (
          <Form className="p-5 bg-white max-w-70 shadow-reviewModal flex flex-col gap-5">
            <StarsInput values={values} />
            <div className="flex flex-col gap-2">
              <h2>Review</h2>
              <Field
                name="review"
                component="textarea"
                rows="7"
                className="border border-solid border-black w-60 p-2 resize-none"
              />
            </div>
            <div className="flex gap-4 justify-center">
              <button
                type="button"
                className="border border-solid py-3 border-deep_blue w-25 max-h-10 flex items-center justify-center"
              >
                Back
              </button>{' '}
              <Button
                type={'submit'}
                className={
                  'text-sm py-3 w-25 max-h-10 flex items-center justify-center'
                }
              >
                Save
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
