import { PiBookOpenText } from 'react-icons/pi';

export const BookItem = ({ book, readingNow }) => {
  const { title, author, publishYear, pagesTotal } = book;
  return (
    <li className="bg-white pt-5 pb-7 flex flex-col max-w-70 shadow-book px-14">
      <h4 className="w-200px mx-auto relative text-wrap mb-7 text-xs">
        {readingNow ? (
          <PiBookOpenText
            className=" absolute -left-8 top-1/2 -translate-y-1/2 w-6 h-6"
            color="#FF6B08"
          />
        ) : (
          <PiBookOpenText
            className=" absolute -left-8 top-1/2 -translate-y-1/2 w-6 h-6"
            color="#A6ABB9"
          />
        )}
        {title}
      </h4>

      <ul className="grid grid-cols-2 min-w-200px mx-auto gap-4 text-xs">
        <li className="text-gray_text">Author:</li>
        <li>{author}</li>
        <li className="text-gray_text">Year:</li>
        <li>{publishYear}</li>
        <li className="text-gray_text">Pages:</li>
        <li>{pagesTotal}</li>
      </ul>
    </li>
  );
};
