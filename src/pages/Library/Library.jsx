import { AddBookForm } from '../../components/AddBookForm/AddBookForm';
import { AddButton } from '../../components/AddButton/AddButton';
import { EmptyLibraryModal } from '../../components/EmptyLibraryModal/EmptyLibraryModal';

export const Library = () => {
  return (
    <div className="bg-gray_bg max-h-noHeaderMob overflow-scroll">
      {/* <EmptyLibraryModal /> */}
      <AddBookForm />
      <AddButton />
    </div>
  );
};
