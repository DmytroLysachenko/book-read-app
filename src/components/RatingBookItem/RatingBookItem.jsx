import { PiBookOpenText } from 'react-icons/pi';
import { IoIosStar, IoIosStarOutline } from 'react-icons/io';

export const RatingBookItem = ({ book, openReviewModal }) => {
  const { title, author, publishYear, pagesTotal, rating } = book;

  const ratingArr = Array(5).fill(null);

  return (
    <li className="bg-white pt-5 pb-7 flex flex-col max-w-70 shadow-book px-14">
      <h4 className="w-200px mx-auto mb-7 relative text-wrap text-xs">
        <PiBookOpenText
          className=" absolute -left-8 top-1/2 -translate-y-1/2 w-6 h-6"
          color="#A6ABB9"
        />
        {title}
      </h4>
      <ul className="grid grid-cols-2 min-w-200px mx-auto gap-4 text-xs">
        <li className="text-gray_text">Author:</li>
        <li>{author}</li>
        <li className="text-gray_text">Year:</li>
        <li>{publishYear}</li>
        <li className="text-gray_text">Pages:</li>
        <li>{pagesTotal}</li>
        <li className="text-gray_text">Rating:</li>{' '}
        <li>
          <div className="flex gap-1">
            {ratingArr.map((ranked, index) => {
              if (index <= rating - 1) {
                return (
                  <IoIosStar
                    color="#FF6B08"
                    className="w-3.5 h-3.5"
                    key={book._id + index + ranked}
                  />
                );
              }
              return (
                <IoIosStarOutline
                  color="#FF6B08"
                  className="w-3.5 h-3.5"
                  key={book._id + index + ranked}
                />
              );
            })}
          </div>
        </li>
      </ul>

      <button
        className="bg-gray_btn text-white shadow-gray_btn py-3 text-center min-w-32 self-center mt-5"
        type="button"
        onClick={() => {
          openReviewModal(book);
        }}
      >
        Review
      </button>
    </li>
  );
};
