import { PiBookOpenText } from 'react-icons/pi';
import { RiFlagLine } from 'react-icons/ri';
import { PiArrowElbowDownRightThin } from 'react-icons/pi';
import { Button } from '../Button/Button';

export const EmptyLibraryModal = ({ closeModal }) => {
  return (
    <div className="fixed left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 bg-white shadow-book">
      <ul className="flex flex-col gap-5 px-5 py-11">
        <li className="flex flex-col gap-1">
          <h3 className=" text-lg font-semibold ">Step 1.</h3>
          <p className=" text-base font-semibold">
            <PiBookOpenText
              className="inline w-6 h-6 mr-3"
              color="#A6ABB9"
            />
            Create your own library
          </p>
          <p className=" text-gray_text text-sm font-normal pl-12 relative">
            <PiArrowElbowDownRightThin
              color="#ff6b08"
              className="h-3 absolute top-0 translate-y-1/4 left-7"
            />
            Add there books which you are going to read.
          </p>
        </li>
        <li className="flex flex-col gap-1">
          <h3 className=" text-lg font-semibold ">Step 2.</h3>
          <p className="text-base font-semibold">
            <RiFlagLine
              className="inline w-4 h-4 mr-3"
              color="#A6ABB9"
            />
            Create your first training
          </p>
          <p className=" text-gray_text text-sm font-normal pl-10 relative">
            <PiArrowElbowDownRightThin
              color="#ff6b08"
              className="h-3 absolute top-0 translate-y-1/4 left-5"
            />
            Set a goal, choose period, start training.
          </p>
        </li>
      </ul>
      <Button
        padding={'11px 52px'}
        type={'button'}
        margin={'40px auto'}
        onClick={closeModal}
      >
        Ok
      </Button>
    </div>
  );
};
