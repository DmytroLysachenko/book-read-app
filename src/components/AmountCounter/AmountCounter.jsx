export const AmountCounter = ({ title, number }) => {
  return (
    <div className="flex flex-col items-center gap-3.5">
      <h3 className="flex shadow-counter bg-google_white justify-center items-center w-25 h-25 font-OpenSans font-bold text-5xl ">
        {number}
      </h3>
      <p className="flex text-wrap text-sm text-gray_text w-16 text-center">
        Amount of {title}
      </p>
    </div>
  );
};
