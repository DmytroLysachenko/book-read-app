import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  registerThunk,
  refreshUserThunk,
  logOutThunk,
  logInThunk,
  googleLogInThunk,
} from './operations';
import { toast } from 'react-toastify';
import { Navigate } from 'react-router-dom';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    accessToken: null,
    refreshToken: null,
    sid: null,
    userData: null,
    isLoggedIn: false,
    isRefreshing: false,
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
        state.userData = payload.userData;
        state.isLoggedIn = true;
        toast.success('You are logged in now!');
      })
      .addCase(googleLogInThunk.fulfilled, (state, { payload }) => {
        console.log(payload);
        toast.success('You are logged in now!');
      })
      .addCase(logOutThunk.fulfilled, (state) => {
        state.userData = null;
        state.accessToken = null;
        state.refreshToken = null;
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
      })
      .addMatcher(
        isAnyOf(
          registerThunk.rejected,
          logInThunk.rejected,
          logOutThunk.rejected
        ),
        (state) => {
          toast.error('Something went wrong, try again!');
        }
      );
  },
});

export const authReducer = authSlice.reducer;
