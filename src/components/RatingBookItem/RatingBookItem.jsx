import { PiBookOpenText } from 'react-icons/pi';

export const RatingBookItem = ({
  title,
  author,
  publishYear,
  pagesTotal,
  rating,
}) => {
  return (
    <div className="bg-white py-5 flex flex-col max-w-70 shadow-book">
      <h4 className="w-200px mx-auto relative text-wrap  text-xs">
        <PiBookOpenText
          className=" absolute -left-8 top-1/2 -translate-y-1/2 w-6 h-6"
          color="#A6ABB9"
        />
        {title}
        Name of the book Lorem ipsum, dolor sit amet consectetur
      </h4>
      <div className="grid grid-cols-2 min-w-200px mx-auto mt-7">
        <ul className="flex flex-col gap-4 text-xs text-gray_text">
          <li>Author:</li>
          <li>Year:</li>
          <li>Pages:</li>
          <li>Rating:</li>
        </ul>
        <ul className="flex flex-col gap-4 text-xs">
          <li>{author}22</li>
          <li>{publishYear}22</li>
          <li>{pagesTotal}22</li>
          <li>
            <div className="rating rating-sm">
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orangeBtn"
                checked={true}
                disabled
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orangeBtn"
                disabled
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orangeBtn"
                disabled
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orangeBtn"
                disabled
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orangeBtn"
                disabled
              />
            </div>
          </li>
        </ul>
      </div>
      <button
        className="bg-gray_btn text-white shadow-gray_btn py-3 text-center min-w-32 self-center mt-5"
        type="button"
      >
        Review
      </button>
    </div>
  );
};
