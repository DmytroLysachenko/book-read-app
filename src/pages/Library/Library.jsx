import { AddBookForm } from '../../components/AddBookForm/AddBookForm';
import { AddButton } from '../../components/AddButton/AddButton';
import { BookItem } from '../../components/BookItem/BookItem';
import { EmptyLibraryModal } from '../../components/EmptyLibraryModal/EmptyLibraryModal';
import { RatingBookItem } from '../../components/RatingBookItem/RatingBookItem';

export const Library = () => {
  return (
    <div className="bg-gray_bg max-h-noHeaderMob overflow-scroll">
      {/* <EmptyLibraryModal /> */}
      {/* <AddBookForm />
      <AddButton /> */}
      {/* <BookItem /> */}
      <RatingBookItem />
    </div>
  );
};
