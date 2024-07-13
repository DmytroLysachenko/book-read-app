import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  registerThunk,
  refreshUserThunk,
  logOutThunk,
  logInThunk,
  googleLogInThunk,
} from './operations';
import { toast } from 'react-toastify';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    accessToken: null,
    refreshToken: null,
    sid: null,
    name: null,
    email: null,
    isLoggedIn: false,
    isRefreshing: false,
    planning: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.fulfilled, (state) => {
        toast.success('You have your own account now, please login!');
      })
      .addCase(logInThunk.fulfilled, (state, { payload }) => {
        state.accessToken = payload.accessToken;
        state.refreshToken = payload.refreshToken;
        state.sid = payload.sid;
        state.name = payload.userData.name;
        state.email = payload.userData.email;
        state.isLoggedIn = true;
        toast.success('You are logged in now!');
      })
      .addCase(googleLogInThunk.fulfilled, (state, { payload }) => {
        toast.success('You are logged in now!');
      })
      .addCase(logOutThunk.fulfilled, (state) => {
        state.accessToken = null;
        state.refreshToken = null;
        state.name = null;
        state.email = null;
        state.isLoggedIn = false;
        toast.success('You are logged out now!');
      })
      .addCase(refreshUserThunk.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUserThunk.fulfilled, (state, { payload }) => {
        state.accessToken = payload.newAccessToken;
        state.refreshToken = payload.newRefreshToken;
        state.sid = payload.newSid;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUserThunk.rejected, (state) => {
        state.isRefreshing = false;
        state.accessToken = null;
        state.refreshToken = null;
        state.name = null;
        state.email = null;
        state.isLoggedIn = false;
      })
      .addMatcher(
        isAnyOf(
          registerThunk.rejected,
          logInThunk.rejected,
          logOutThunk.rejected
        ),
        (state) => {
          toast.error('Something went wrong!');
        }
      );
  },
});

export const authReducer = authSlice.reducer;
