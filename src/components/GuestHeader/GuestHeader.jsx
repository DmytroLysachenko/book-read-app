import { Link } from 'react-router-dom';

export const GuestHeader = () => {
  return (
    <header className="h-15 flex items-center justify-center bg-white shadow-book">
      <Link
        to={'/'}
        className="text-xl font-AbrilFatface font-logo"
      >
        BR
      </Link>
    </header>
  );
};
