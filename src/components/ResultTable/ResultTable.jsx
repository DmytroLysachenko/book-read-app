import DatePicker from 'react-datepicker';
import { Button } from '../Button/Button';
import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { addReadPagesThunk } from '../../redux/books/operations';
import { totalPages } from '../../helpers/chartCalculations';

export const ResultTable = ({ planning }) => {
  const today = new Date();
  const dispatch = useDispatch();
  const totalPagesToRead =
    totalPages(planning) -
    planning.stats.reduce((acc, record) => acc + record.pagesCount, 0);
  return (
    <div className="w-70 mx-auto bg-white mt-8 p-5 shadow-book">
      <h2 className="text-center text-xs font-semibold uppercase">Result</h2>
      <Formik
        initialValues={{
          pages: '',
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
                min={1}
                max={totalPagesToRead}
                required
                className="py-3 px-3 h-42px text-deep_blue  bg-google_white font-normal bg-transparent focus:bg-white focus:shadow-input border border-solid border-gray_text  max-w-28"
              />
            </label>
          </div>
          <Button
            type={'submit'}
            padding={'10px'}
            onClick={() => {}}
          >
            Add result
          </Button>
        </Form>
      </Formik>
      <div className="flex w-full flex-col border-opacity-50">
        <div className="divider text-xs font-bold uppercase">Statistics</div>
      </div>
      <table className="w-full max-h-25 overflow-y-auto block">
        <tbody className="w-full block">
          {planning.stats.map(({ time, pagesCount }, index) => {
            const [date, hour] = time.split(' ');
            const [year, month, day] = date.split('-');
            const [hours, minutes] = hour.split(':');
            const formattedTime = [
              hours.padStart(2, '0'),
              minutes.padStart(2, '0'),
            ].join(':');
            const formattedDate = [
              day.padStart(2, '0'),
              month.padStart(2, '0'),
              year,
            ].join('.');
            return (
              <tr
                className="w-full block"
                key={pagesCount + time + index}
              >
                <td className="w-1/3 inline-block text-start">
                  {formattedDate}
                </td>
                <td className="w-1/3 inline-block text-center">
                  {formattedTime}
                </td>
                <td className="w-1/3 inline-block text-end">
                  {pagesCount} pages
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
