import { createAsyncThunk } from '@reduxjs/toolkit';
import { bookReadAPI } from '../../helpers/bookReadAPI';

export const getUserDataThunk = createAsyncThunk(
  'books/getdata',
  async (_, thunkAPI) => {
    try {
      const { data } = await bookReadAPI.get(`/user/books`);
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addBookThunk = createAsyncThunk(
  'books/add',
  async (book, thunkAPI) => {
    try {
      const { data } = await bookReadAPI.post('/book', book);
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const deleteBookThunk = createAsyncThunk(
  'books/delete',
  async (id, thunkAPI) => {
    try {
      const { data } = await bookReadAPI.delete(`/book/${id}`);
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const addReviewThunk = createAsyncThunk(
  'books/addreview',
  async (info, thunkAPI) => {
    try {
      const { data } = await bookReadAPI.patch(
        `/book/review/${info._id}`,
        info.values
      );

      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const startPlanningThunk = createAsyncThunk(
  'planning/start',
  async (info, thunkAPI) => {
    try {
      const { data } = await bookReadAPI.post(`/planning`, info);
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addReadPagesThunk = createAsyncThunk(
  'planning/pages_read',
  async (pages, thunkAPI) => {
    try {
      const { data } = await bookReadAPI.patch('/planning', pages);
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const loadCurrentPlanningThunk = createAsyncThunk(
  'books/current_plan',
  async (_, thunkAPI) => {
    try {
      const { data } = await bookReadAPI.get(`/planning`);
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
