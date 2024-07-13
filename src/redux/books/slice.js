import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addBookThunk,
  addReadPagesThunk,
  addReviewThunk,
  deleteBookThunk,
  getUserDataThunk,
  loadCurrentPlanningThunk,
  startPlanningThunk,
} from './operations';
import { toast } from 'react-toastify';

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    goingToRead: [],
    currentlyReading: [],
    finishedReading: [],
    planning: null,
    loading: null,
    error: null,
    currentlyReviewing: null,
  },
  reducers: {
    addReviewingBook(state, { payload }) {
      state.currentlyReviewing = payload;
    },
    removeReviewingBook(state) {
      state.currentlyReviewing = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserDataThunk.fulfilled, (state, { payload }) => {
        state.goingToRead = payload.goingToRead ?? null;
        state.currentlyReading = payload.currentlyReading ?? null;
        state.finishedReading = payload.finishedReading ?? null;
      })
      .addCase(deleteBookThunk.fulfilled, (state, { payload }) => {
        state.goingToRead = state.goingToRead.filter(
          (book) => book._id !== payload
        );
        state.currentlyReading = state.currentlyReading.filter(
          (book) => book._id !== payload
        );
        state.finishedReading = state.finishedReading.filter(
          (book) => book._id !== payload
        );
        toast.success('Book deleted');
      })
      .addCase(addBookThunk.fulfilled, (state, { payload }) => {
        state.goingToRead.push(payload);
        toast.success('Book added!');
      })
      .addCase(addReviewThunk.fulfilled, (state, { payload }) => {
        state.finishedReading = state.finishedReading.map((book) =>
          book._id === payload._id ? payload : book
        );
        toast.success('Book reviewed!');
      })
      .addCase(startPlanningThunk.fulfilled, (state, { payload }) => {
        state.planning = payload;
      })
      .addCase(addReadPagesThunk.fulfilled, (state, { payload }) => {
        state.currentlyReading = state.currentlyReading.map((book) =>
          book._id === payload.book._id ? payload.book : book
        );
        state.planning = payload.planning;
      })
      .addCase(loadCurrentPlanningThunk.fulfilled, (state, { payload }) => {
        if (payload) {
          state.planning = payload.planning;
        }
      })
      .addMatcher(
        isAnyOf(
          addBookThunk.rejected,
          addReviewThunk.rejected,
          deleteBookThunk.rejected,
          getUserDataThunk.rejected,
          loadCurrentPlanningThunk.rejected,
          addReadPagesThunk.rejected,
          startPlanningThunk.rejected
        ),
        (state) => {
          state.error = true;
          state.loading = null;
        }
      )
      .addMatcher(
        isAnyOf(
          addBookThunk.fulfilled,
          addReviewThunk.fulfilled,
          deleteBookThunk.fulfilled,
          getUserDataThunk.fulfilled,
          loadCurrentPlanningThunk.fulfilled,
          addReadPagesThunk.fulfilled,
          startPlanningThunk.fulfilled
        ),
        (state) => {
          state.loading = null;
        }
      )
      .addMatcher(
        isAnyOf(
          addBookThunk.pending,
          addReviewThunk.pending,
          deleteBookThunk.pending,
          getUserDataThunk.pending,
          loadCurrentPlanningThunk.pending,
          addReadPagesThunk.pending,
          startPlanningThunk.pending
        ),
        (state) => {
          state.error = null;
          state.loading = true;
        }
      );
  },
});

export const booksReducer = booksSlice.reducer;
export const { addReviewingBook, removeReviewingBook } = booksSlice.actions;
