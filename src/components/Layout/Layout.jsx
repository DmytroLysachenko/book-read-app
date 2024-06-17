import { Suspense } from 'react';
import { Header } from '../Header/Header';
import { Loader } from '../Loader/Loader';

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div>
        <Suspense fallback={<Loader />}>{children}</Suspense>
      </div>
    </>
  );
};
