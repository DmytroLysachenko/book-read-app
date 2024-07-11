export const ActiveAmountCounter = ({ title, number }) => {
  let booksLeftStyle = '';
  if (title === 'Books lefts') {
    booksLeftStyle = 'text-orangeBtn';
  }
  return (
    <div className={'flex flex-col items-center gap-3.5 ' + booksLeftStyle}>
      <h3 className="flex shadow-counter bg-google_white justify-center items-center w-15 h-15 font-OpenSans font-bold text-4xl">
        {number}
      </h3>
      <p className="flex text-wrap text-10px text-gray_text w-11 text-center">
        {title}
      </p>
    </div>
  );
};
