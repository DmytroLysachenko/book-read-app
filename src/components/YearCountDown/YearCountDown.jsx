import { useMemo, useState } from 'react';
import { countDays } from '../../helpers/formatDate';

export const YearCountDown = () => {
  const [today, setToday] = useState(new Date());
  setInterval(() => {
    setToday(new Date());
  });

  const nextYear = useMemo(() => {
    return new Date(today.getFullYear() + 1, 0);
  }, []);
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
    <div className="flex gap-7">
      <div className="flex flex-col">
        <span>{days}</span>
        <span>days</span>
      </div>
      <div className="flex flex-col">
        <span>{hours}</span>
        <span>hours</span>
      </div>
      <div className="flex flex-col">
        <span>{minutes}</span>
        <span>minutes</span>
      </div>
      <div className="flex flex-col">
        <span>{seconds}</span>
        <span>seconds</span>
      </div>
    </div>
  );
};
