import { createSlice } from "@reduxjs/toolkit";
import {CreateAppAsyncThunk, DataMeResponse, LoginRequest, ResultCode} from "common";
import { authApi } from "features";
import { appActions } from "app";

const login = CreateAppAsyncThunk<{ isLoggedIn: boolean }, LoginRequest>("auth/login", async (arg, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;
  const res = await authApi.login(arg);
  if (res.data.resultCode === ResultCode.Success) {
    return { isLoggedIn: true };
  }
  if (res.data.resultCode === ResultCode.Captcha) {
    thunkAPI.dispatch(authThunk.getCaptcha());
  }
  return rejectWithValue({ data: res.data });
});

const logout = CreateAppAsyncThunk<{ isLoggedIn: boolean }, void>("auth/logout", async (_, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;
  const res = await authApi.logout();
  if (res.data.resultCode === ResultCode.Success) {
    return { isLoggedIn: false };
  } else {
    return rejectWithValue({ data: res.data });
  }
});

const me = CreateAppAsyncThunk<{ isLoggedIn: boolean, data: DataMeResponse }, void>("auth/me", async (_, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;
  const res = await authApi.me();
  try {
    if (res.data.resultCode === ResultCode.Success) {
      return { isLoggedIn: true, data: res.data.data };
    } else {
      return rejectWithValue({ data: res.data });
    }
  } finally {
    dispatch(appActions.setAppIsInitialized({ isInitialized: true }));
  }
});

const getCaptcha = CreateAppAsyncThunk<{ urlCaptcha: string }, void>("auth/getCaptcha", async (_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  const res = await authApi.getCaptcha();

  return { urlCaptcha: res.data.url };
});

const slice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    // isLoading: true,
    urlCaptcha: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.isLoggedIn = action.payload.isLoggedIn;
        // state.urlCaptcha = "";
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.isLoggedIn = action.payload.isLoggedIn;
      })
      .addCase(me.fulfilled, (state, action) => {
        state.isLoggedIn = action.payload.isLoggedIn;
        // state.isLoading = false;
      })
        // .addCase(me.rejected, (state, action) => {
        //   state.isLoggedIn = false;
        //   state.isLoading = false;
        // })
      .addCase(getCaptcha.fulfilled, (state, action) => {
        state.urlCaptcha = action.payload.urlCaptcha;
      });
  },
});

export const authReducer = slice.reducer;

export const authThunk = { login, logout, me, getCaptcha };
