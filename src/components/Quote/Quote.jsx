export const Quote = () => {
  return (
    <div className="relative pb-10 pt-10">
      <p className="font-AbrilFatface text-orangeBtn text-6xl text-center font-normal absolute top-1 left-1/2 -translate-x-1/2">
        “
      </p>
      <p className=" text-center max-w-215px text-wrap block mx-auto ">
        Books are the ships of thoughts, wandering through the waves of time.
      </p>
      <div className="divider w-25 mx-auto before:bg-divider before:h-px after:h-px after:bg-divider mb-3"></div>
      <p className="text-center text-sm font-medium text-gray_text">
        Francis Bacon
      </p>
    </div>
  );
};
