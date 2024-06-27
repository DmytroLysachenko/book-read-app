import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { Register } from '../../pages/Register/Register';
import { Login } from '../../pages/Login/Login';
import { useEffect, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUserThunk } from '../../redux/auth/operations';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MobInfo } from '../MobInfo/MobInfo';
import { Library } from '../../pages/Library/Library';

import { PrivateRoute, PublicRoute } from '../../routes';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { Home } from '../../pages/Home/Home';
import { getUserDataThunk } from '../../redux/books/operations';
import { Backdrop } from '../Backdrop/Backdrop';
import { ReviewModal } from '../ReviewModal/ReviewModal';

export const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);
  useLayoutEffect(() => {
    if (isLoggedIn) {
      dispatch(getUserDataThunk());
    }
  }, [dispatch, isLoggedIn]);
  return (
    <>
      <ToastContainer />
      <Layout>
        <Routes>
          <Route
            path="/"
            element={isLoggedIn ? <Home /> : <MobInfo />}
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/library"
            element={
              <PrivateRoute>
                <Library />
              </PrivateRoute>
            }
          />
        </Routes>
      </Layout>
      <Backdrop>
        <ReviewModal />
      </Backdrop>
    </>
  );
};
