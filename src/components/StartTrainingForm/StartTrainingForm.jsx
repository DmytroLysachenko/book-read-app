import { FaArrowLeftLong } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import { useMemo, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { RiCalendar2Line } from 'react-icons/ri';

import { IoIosArrowDown } from 'react-icons/io';
import { selectGoingToReadBooks } from '../../redux/books/selectors';
import { formatDate } from '../../helpers/formatDate';
import Select from 'react-select';

export const StartTrainingForm = ({ closeModal }) => {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const books = useSelector(selectGoingToReadBooks);
  const options = useMemo(
    () =>
      books.map((book) => ({
        value: book._id,
        label: book.title,
      })),
    [books]
  );

  return (
    <div className="py-6 w-full h-full">
      <form
        className=" flex flex-col gap-5 items-center max-w-70 mx-auto"
        onSubmit={(event) => {
          event.preventDefault();
          setStartDate(null);
          setEndDate(null);
          console.log(formatDate(startDate), formatDate(endDate));
        }}
      >
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
        <h2 className="px-20 py-4 bg-gray_heading min-w-70 text-white font-semibold text-xl text-center shadow-book mt-8">
          My training
        </h2>
        <div className="relative">
          <RiCalendar2Line className="absolute top-3 left-3 w-4 h-4 text-placeholder_text pointer-events-none" />
          <DatePicker
            required={true}
            dateFormat="yyyy-MM-dd"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            name="startDate"
            placeholderText="Start"
            className="overflow-hidden bg-transparent border border-solid border-placeholder_text focus:border focus:border-solid focus:border-placeholder_text cursor-pointer h-10 px-10 max-w-70"
          />
          <IoIosArrowDown className="w-5 h-5 absolute top-5 -translate-y-1/2 right-2 pointer-events-none" />
        </div>
        <div className="relative">
          <RiCalendar2Line className="absolute top-3 left-3 w-4 h-4 text-placeholder_text pointer-events-none" />
          <DatePicker
            dateFormat="yyyy-MM-dd"
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            name="endDate"
            placeholderText="Finish"
            className="overflow-hidden bg-transparent border border-solid border-placeholder_text focus:border focus:border-solid focus:border-placeholder_text cursor-pointer h-10 px-10 max-w-70"
          />
          <IoIosArrowDown className="w-5 h-5 absolute top-5 -translate-y-1/2 right-2 pointer-events-none" />
        </div>
        <div className="relative">
          <Select
            options={options}
            isSearchable={true}
            className="min-w-270px min-h-10"
            placeholder="Choose book from the library"
            styles={{
              control: (styles) => ({
                ...styles,
                backgroundColor: 'white',
                borderRadius: '0',
                borderColor: '#a6abb9',
                boxShadow: 'inset 0 1px 2px 0 rgba(29, 29, 27, 0.15)',
                ':hover': {
                  borderColor: '#a6abb9',
                  outline: 'none',
                },
                ':active': {
                  outline: 'none',
                  boxShadow: 'none',
                },
                ':focus': {
                  outline: 'none',
                  boxShadow: 'none',
                },
              }),
              indicatorSeparator: () => ({
                visibility: 'hidden',
              }),
              indicatorsContainer: (styles) => ({
                display: 'none',
              }),
            }}
          />
          <IoIosArrowDown className="w-5 h-5 absolute top-5 -translate-y-1/2 right-2 pointer-events-none" />
        </div>
        <button
          className="py-3 px-16 border border-solid border-deep_blue min-w-170px mt-8"
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
};
