import { PiBookOpenText } from 'react-icons/pi';

export const BookItem = ({ book, readingNow }) => {
  const { title, author, publishYear, pagesTotal } = book;
  return (
    <li className="bg-white py-5 flex flex-col max-w-70 shadow-book">
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
      <div className="grid grid-cols-2 min-w-200px mx-auto">
        <ul className="flex flex-col gap-4 text-xs text-gray_text">
          <li>Author:</li>
          <li>Year:</li>
          <li>Pages:</li>
        </ul>
        <ul className="flex flex-col gap-4 text-xs">
          <li>{author}</li>
          <li>{publishYear}</li>
          <li>{pagesTotal}</li>
        </ul>
      </div>
    </li>
  );
};