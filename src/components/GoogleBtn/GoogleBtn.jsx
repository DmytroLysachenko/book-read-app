import { FcGoogle } from 'react-icons/fc';

export const GoogleBtn = () => {
  return (
    <button
      type="button"
      className="px-3.5 py-3 flex gap-2.5 w-36 max-h-10 items-center bg-google_white text-google_text font-bold shadow-google "
    >
      <FcGoogle className="w-5 h-5" />
      <span className="block font-Roboto text-base">Google</span>
    </button>
  );
};
