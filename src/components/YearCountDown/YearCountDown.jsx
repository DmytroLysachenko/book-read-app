import { useMemo, useState } from 'react';
import { countDays } from '../../helpers/formatDate';

export const YearCountDown = () => {
  const [today, setToday] = useState(new Date());

  setInterval(() => {
    setToday(new Date());
  });

  const nextYear = useMemo(() => {
    return new Date(today.getFullYear() + 1, 0);
  }, [today]);
  const days = useMemo(() => {
    return countDays(today, nextYear);
  }, [today, nextYear]);
  const hours = useMemo(() => {
    return 23 - today.getHours();
  }, [today]);
  const minutes = useMemo(() => {
    return 59 - today.getMinutes();
  }, [today]);
  const seconds = useMemo(() => {
    return 59 - today.getSeconds();
  }, [today]);
  return (
    <>
      <h2 className="block w-70 mx-auto text-center text-sm text-gray_text">
        End of the year countdown
      </h2>
      <div className="flex gap-7 bg-white px-8 py-2 mx-auto mt-2 w-70 shadow-counter">
        <div className="flex flex-col items-center justify-center ">
          <span className="block w-full font-OpenSans text-2xl text-center font-bold text-bgOverlay relative after:content-[':'] after:font-serif after:absolute after:-right-3.5 after:text-2xl after:font-bold after:text-bgOverlay">
            {days}
          </span>
          <span className="text-10px text-gray_text">DAYS</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="block w-full font-OpenSans text-2xl text-center font-bold text-bgOverlay relative after:content-[':'] after:font-serif after:absolute after:-right-3.5 after:text-2xl after:font-bold after:text-bgOverlay">
            {hours.toString().padStart(2, '0')}
          </span>
          <span className="text-10px text-gray_text">HRS</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="block w-full font-OpenSans text-2xl text-center font-bold text-bgOverlay relative after:content-[':'] after:font-serif after:absolute after:-right-3.5 after:text-2xl after:font-bold after:text-bgOverlay">
            {minutes.toString().padStart(2, '0')}
          </span>
          <span className="text-10px text-gray_text">MINS</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="font-OpenSans text-2xl font-bold text-bgOverlay">
            {seconds.toString().padStart(2, '0')}
          </span>
          <span className="text-10px text-gray_text">SECS</span>
        </div>
      </div>
    </>
  );
};
