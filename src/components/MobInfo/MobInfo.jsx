import { Link } from 'react-router-dom';

export const MobInfo = () => {
  return (
    <div className="flex flex-col px-5 mx-auto">
      <h2 className="text-34px leading-112% font-AbrilFatface text-center font-normal">
        Books Reading
      </h2>
      <h3 className="text-xl leading-190%">Will help you to</h3>
      <ul className="flex flex-col">
        <li>Create your goal faster and proceed to read</li>
        <li>Divide process proportionally for each day</li>
        <li>Track your success</li>
      </ul>
      <h3 className="text-xl leading-190%">You may also</h3>
      <ul>
        <li>Pose your own independent point of view</li>
        <li>Improve your professional skills according to new knowledge</li>
        <li>Become an interesting interlocutor</li>
      </ul>
      <div>
        <Link>Log in</Link>
        <Link className="bg-orangeBtn text-white font-semibold">Register</Link>
      </div>
    </div>
  );
};
