import { Suspense } from 'react';
import { UserHeader } from '../UserHeader/UserHeader';
import { Loader } from '../Loader/Loader';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { GuestHeader } from '../GuestHeader/GuestHeader';

export const Layout = ({ children }) => {
  const isUser = useSelector(selectIsLoggedIn);
  return (
    <>
      {isUser ? <UserHeader /> : <GuestHeader />}
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </>
  );
};
