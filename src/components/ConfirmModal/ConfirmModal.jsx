import { useDispatch } from 'react-redux';
import { Button } from '../Button/Button';
import { logOutThunk } from '../../redux/auth/operations';

export const ConfirmModal = ({ closeModal }) => {
  const dispatch = useDispatch();
  return (
    <div className="py-12 px-6 max-w-70 bg-white z-10">
      <p className="text-center text-base w-60">
        The changes you made will be lost if you navigate away from this
        application
      </p>
      <div className="flex justify-center gap-4 mt-5">
        <button
          type="button"
          onClick={() => closeModal()}
          className="py-2.5 min-w-24  border border-solid border-deep_blue"
        >
          Cancel
        </button>
        <button
          type="button"
          className="py-2.5 min-w-24 shadow-gray_btn bg-orangeBtn text-white font-semibold block "
          onClick={() => {
            closeModal();
            dispatch(logOutThunk());
          }}
        >
          Leave
        </button>
      </div>
    </div>
  );
};
