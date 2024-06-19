import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
export const MobInfo = () => {
  return (
    <div className="flex flex-col px-5 pt-8 pb-10 mx-auto max-w-80 max-h-noHeaderMob overflow-y-scroll ">
      <h2 className="text-34px leading-112% font-AbrilFatface text-center font-normal">
        Books Reading
      </h2>
      <h3 className="text-xl leading-190% mt-8">Will help you to</h3>
      <ul className="flex flex-col mt-14px list-d ">
        <li className="relative pl-3 text-gray_text text-14px">
          <IoIosArrowForward className="absolute -left-1 top-1  fill-orangeBtn" />
          Create your goal faster and proceed to read
        </li>
        <li className="relative pl-3 text-gray_text text-14px">
          <IoIosArrowForward className="absolute -left-1 top-1  fill-orangeBtn" />
          Divide process proportionally for each day
        </li>
        <li className="relative pl-3 text-gray_text text-14px">
          <IoIosArrowForward className="absolute -left-1 top-1  fill-orangeBtn" />
          Track your success
        </li>
      </ul>
      <h3 className="text-xl leading-190% mt-6">You may also</h3>
      <ul className="flex flex-col mt-14px">
        <li className="relative pl-3 text-gray_text text-14px">
          <IoIosArrowForward className="absolute -left-1 top-1  fill-orangeBtn" />
          Pose your own independent point of view
        </li>
        <li className="relative pl-3 text-gray_text text-14px">
          <IoIosArrowForward className="absolute -left-1 top-1  fill-orangeBtn" />
          Improve your professional skills according to new knowledge
        </li>
        <li className="relative pl-3 text-gray_text text-14px">
          <IoIosArrowForward className="absolute -left-1 top-1  fill-orangeBtn" />
          Become an interesting interlocutor
        </li>
      </ul>
      <div className="mt-15 flex gap-5 mx-auto">
        <Link className="border border-solid border-deep_blue min-w-130px min-h-10 flex justify-center items-center">
          Log in
        </Link>
        <Link className="bg-orangeBtn text-white font-semibold min-w-130px min-h-10 flex justify-center items-center">
          Register
        </Link>
      </div>
    </div>
  );
};
