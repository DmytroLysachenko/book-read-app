import { useMemo, useState } from 'react';
import DatePicker from 'react-datepicker';
import { Button } from '../Button/Button';
import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { addReadPagesThunk } from '../../redux/books/operations';

export const ResultTable = () => {
  const today = useMemo(() => new Date());
  const dispatch = useDispatch();
  return (
    <div className="w-70 mx-auto bg-white mt-8 p-5 shadow-book">
      <h2 className="text-center text-xs font-semibold capitalize">Result</h2>
      <div>
        <Formik
          initialValues={{
            pages: null,
          }}
          onSubmit={({ pages }) => {
            dispatch(addReadPagesThunk({ pages }));
          }}
        >
          <Form className="flex flex-col gap-7 mt-3">
            <div className="flex gap-5">
              <label className="flex flex-col gap-1 text-gray_text text-xs ">
                Date
                <DatePicker
                  selected={today}
                  disabled
                  className="py-3 px-3 h-42px text-deep_blue bg-google_white font-normal bg-transparent  border border-solid border-gray_text active:border active:border-solid active:border-gray_text max-w-28"
                />
              </label>
              <label className="flex flex-col  gap-1 text-gray_text text-xs">
                Amount of pages
                <Field
                  type="number"
                  name="pages"
                  className="py-3 px-3 h-42px text-deep_blue  bg-google_white font-normal bg-transparent focus:bg-white focus:shadow-input border border-solid border-gray_text  max-w-28"
                />
              </label>
            </div>
            <Button
              type={'submit'}
              padding={'10px'}
            >
              Add result
            </Button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
