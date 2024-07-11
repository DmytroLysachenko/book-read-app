import { PiBookOpenText } from 'react-icons/pi';
import { MdOutlineDelete } from 'react-icons/md';
export const PlanningBookItem = ({ book, removeNewPlanningBook }) => {
  const { title, author, publishYear, pagesTotal } = book;
  return (
    <>
      <li className="pt-8 pb-8 flex flex-col max-w-70 after:divider mx-auto relative h-170px">
        <h4 className="w-200px mx-auto relative text-wrap mb-3 text-xs">
          <PiBookOpenText
            className=" absolute -left-8 top-1/2 -translate-y-1/2 w-6 h-6"
            color="#A6ABB9"
          />
          {title}
          {title !== '...' && (
            <button
              className="absolute -right-8 top-1/2 -translate-y-1/2 w-6 h-6"
              onClick={() => {
                removeNewPlanningBook(book._id);
              }}
            >
              <MdOutlineDelete
                className="w-6 h-6"
                color="#A6ABB9"
              />
            </button>
          )}
        </h4>

        <ul className="grid grid-cols-2 min-w-200px mx-auto gap-4 text-xs">
          <li className="text-gray_text">Author:</li>
          <li>{author}</li>
          <li className="text-gray_text">Year:</li>
          <li>{publishYear}</li>
          <li className="text-gray_text">Pages:</li>
          <li>{pagesTotal}</li>
        </ul>
        <div className="divider absolute m-0  w-70 mx-auto h-px -left-8 bottom-0"></div>
      </li>
    </>
  );
};
