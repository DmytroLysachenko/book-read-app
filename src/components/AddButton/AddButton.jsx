import { HiOutlinePlus } from 'react-icons/hi2';

export const AddButton = () => {
  return (
    <button
      type="button"
      className="fixed left-1/2 bottom-3 -translate-x-1/2 w-13 h-13 bg-orangeBtn rounded-full flex items-center justify-center"
    >
      <HiOutlinePlus
        color="white"
        className="w-6 h-6"
      />
    </button>
  );
};
