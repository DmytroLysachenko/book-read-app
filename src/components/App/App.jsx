import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { Register } from '../../pages/Register/Register';
import { Login } from '../../pages/Login/Login';

export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route
          path="register"
          element={<Register />}
        />
        <Route
          path="login"
          element={<Login />}
        />
      </Routes>
    </Layout>
  );
};
