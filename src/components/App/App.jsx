import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { Register } from '../../pages/Register/Register';
import { Login } from '../../pages/Login/Login';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUserThunk } from '../../redux/auth/operations';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MobInfo } from '../MobInfo/MobInfo';
import { Library } from '../../pages/Library/Library';
import { getUserDataThunk } from '../../redux/books/operations';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUserThunk());
    dispatch(getUserDataThunk());
  }, [dispatch]);
  return (
    <>
      <ToastContainer />
      <Layout>
        <Routes>
          <Route
            path="/"
            element={<MobInfo />}
          />
          <Route
            path="register"
            element={<Register />}
          />
          <Route
            path="login"
            element={<Login />}
          />
          <Route
            path="library"
            element={<Library />}
          />
        </Routes>
      </Layout>
    </>
  );
};
