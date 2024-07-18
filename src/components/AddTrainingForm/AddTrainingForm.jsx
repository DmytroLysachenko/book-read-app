import { FaArrowLeftLong } from 'react-icons/fa6';
import { useSelector } from 'react-redux';
import { useMemo, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { RiCalendar2Line } from 'react-icons/ri';

import { IoIosArrowDown } from 'react-icons/io';
import { selectGoingToReadBooks } from '../../redux/books/selectors';
import { formatDateToString } from '../../helpers/formatDate';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

export const AddTrainingForm = ({
  closeModal,
  setNewPlanningStartDate,
  setNewPlanningEndDate,
  addNewPlanningBook,
  newPlanning,
}) => {
  const [startDate, setStartDate] = useState(newPlanning.startDate);
  const [endDate, setEndDate] = useState(newPlanning.endDate);
  const [selectedBook, setSelectedBook] = useState(null);
  const books = useSelector(selectGoingToReadBooks);
  const animatedComponents = makeAnimated();
  const options = useMemo(
    () =>
      books.map((book) => ({
        value: book._id,
        label: book.title,
      })),
    [books]
  );
  console.log(startDate, endDate);
  return (
    <div className="py-6 w-full h-full">
      <form
        className=" flex flex-col gap-5 items-center max-w-70 mx-auto"
        onSubmit={(event) => {
          event.preventDefault();

          setNewPlanningEndDate(endDate);
          setNewPlanningStartDate(startDate);
          addNewPlanningBook(selectedBook);
          closeModal();
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
            required
            value={startDate}
            dateFormat="yyyy-MM-dd"
            onChange={(date) => {
              console.log(formatDateToString(date, 2));
              setStartDate(formatDateToString(date, 2));
            }}
            name="startDate"
            placeholderText="Start"
            className="overflow-hidden bg-transparent border border-solid border-placeholder_text focus:border focus:border-solid focus:border-placeholder_text cursor-pointer h-10 px-10 w-70"
          />
          <IoIosArrowDown className="w-5 h-5 absolute top-5 -translate-y-1/2 right-2 pointer-events-none" />
        </div>
        <div className="relative">
          <RiCalendar2Line className="absolute top-3 left-3 w-4 h-4 text-placeholder_text pointer-events-none" />
          <DatePicker
            dateFormat="yyyy-MM-dd"
            required
            selected={endDate}
            onChange={(date) => {
              console.log(formatDateToString(date, 2));
              setEndDate(formatDateToString(date, 2));
            }}
            name="endDate"
            placeholderText="Finish"
            className="overflow-hidden bg-transparent border border-solid border-placeholder_text focus:border focus:border-solid focus:border-placeholder_text cursor-pointer h-10 px-10 w-70"
          />
          <IoIosArrowDown className="w-5 h-5 absolute top-5 -translate-y-1/2 right-2 pointer-events-none" />
        </div>
        <div className="relative">
          <Select
            options={options}
            components={animatedComponents}
            required
            name="books"
            isSearchable={true}
            placeholder="Choose book from the library"
            styles={{
              control: (styles) => ({
                ...styles,
                width: '280px',
                height: '40px',
                backgroundColor: 'white',
                borderRadius: '0',
                borderColor: '#a6abb9',
                boxShadow: 'inset 0 1px 2px 0 rgba(29, 29, 27, 0.15)',
                ':hover': {
                  borderColor: '#a6abb9',
                  outline: 'none',
                  cursor: 'pointer',
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
              indicatorsContainer: () => ({
                display: 'none',
              }),
            }}
            onChange={(option) => setSelectedBook(option.value)}
          />
          <IoIosArrowDown className="w-5 h-5 absolute top-5 -translate-y-1/2 right-2 pointer-events-none" />
        </div>
        <button
          className="py-3 px-16 border border-solid border-deep_blue min-w-170px mt-3"
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
};
