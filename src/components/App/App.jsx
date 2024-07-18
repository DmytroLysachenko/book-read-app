import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout/Layout';

import { useEffect, useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUserThunk } from '../../redux/auth/operations';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MobInfo } from '../MobInfo/MobInfo';
import { lazy } from 'react';
import { PrivateRoute, PublicRoute } from '../../routes';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import {
  getUserDataThunk,
  loadCurrentPlanningThunk,
} from '../../redux/books/operations';
import { Backdrop } from '../Backdrop/Backdrop';
import { ReviewModal } from '../ReviewModal/ReviewModal';
import { addReviewingBook, removeReviewingBook } from '../../redux/books/slice';
import { ConfirmModal } from '../ConfirmModal/ConfirmModal';
import { selectCurrentPlanning } from '../../redux/books/selectors';

const Home = lazy(() => import('../../pages/Home/Home'));
const Library = lazy(() => import('../../pages/Library/Library'));
const Register = lazy(() => import('../../pages/Register/Register'));
const Login = lazy(() => import('../../pages/Login/Login'));

export const App = () => {
  const dispatch = useDispatch();
  const [reviewModalIsOpen, setReviewModalIsOpen] = useState(false);
  const [confirmModalIsOpen, setConfirmModalIsOpen] = useState(false);

  const [newPlanning, setNewPlanning] = useState({
    startDate: null,
    endDate: null,
    books: [],
  });

  const setNewPlanningStartDate = (date) => {
    newPlanning.startDate = date;
  };
  const setNewPlanningEndDate = (date) => {
    newPlanning.endDate = date;
  };
  const addNewPlanningBook = (bookId) => {
    if (!newPlanning.books.includes(bookId)) {
      setNewPlanning((prev) => {
        const { startDate, endDate, books } = prev;
        books.push(bookId);
        return { startDate, endDate, books };
      });
    }
  };
  const removeNewPlanningBook = (bookId) => {
    if (newPlanning.books.includes(bookId)) {
      setNewPlanning((prev) => {
        const { startDate, endDate, books } = prev;
        const index = books.indexOf(bookId);
        books.splice(index, 1);
        return { startDate, endDate, books };
      });
    }
  };
  const openConfirmModal = () => {
    setConfirmModalIsOpen(true);
  };
  const closeConfirmModal = () => {
    setConfirmModalIsOpen(false);
  };
  const openReviewModal = (book) => {
    dispatch(addReviewingBook(book));
    setReviewModalIsOpen(true);
  };
  const closeReviewModal = () => {
    dispatch(removeReviewingBook());
    setReviewModalIsOpen(false);
  };
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useLayoutEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getUserDataThunk());
      dispatch(loadCurrentPlanningThunk());
    }
  }, [dispatch, isLoggedIn]);
  return (
    <>
      <ToastContainer />
      <Layout
        newPlanning={newPlanning}
        openConfirmModal={openConfirmModal}
      >
        <Routes>
          <Route
            path="/"
            element={
              isLoggedIn ? (
                <Home
                  openConfirmModal={openConfirmModal}
                  setNewPlanningStartDate={setNewPlanningStartDate}
                  setNewPlanningEndDate={setNewPlanningEndDate}
                  addNewPlanningBook={addNewPlanningBook}
                  removeNewPlanningBook={removeNewPlanningBook}
                  newPlanning={newPlanning}
                />
              ) : (
                <MobInfo />
              )
            }
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
                <Library openReviewModal={openReviewModal} />
              </PrivateRoute>
            }
          />
        </Routes>
      </Layout>
      {reviewModalIsOpen && (
        <Backdrop>
          <ReviewModal closeModal={closeReviewModal} />
        </Backdrop>
      )}
      {confirmModalIsOpen && (
        <Backdrop>
          <ConfirmModal closeModal={closeConfirmModal} />
        </Backdrop>
      )}
    </>
  );
};
