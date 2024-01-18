import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  Contacts,
  CreateAppAsyncThunk,
  handleServerAppError,
  handleServerNetworkError,
  Nullable,
  Photos,
  ResultCode,
  UserProfile,
} from "common";

import { RequestStatusType } from "app";
import { authThunk } from "features";
import { profileApi } from "features";

const initialState = {
  myId: null as Nullable<number>,
  entityStatus: "idle",
  userProfile: {
    userId: null as Nullable<number>,
    aboutMe: "",
    lookingForAJob: false,
    lookingForAJobDescription: "",
    fullName: "",
    contacts: {} as Contacts,
    photos: {
      small: "",
      large: "",
    } as Photos,
  },
};
export type DomainProfile = UserProfile & {
  entityStatus: RequestStatusType;
};
const slice = createSlice({
  name: "Profile",
  initialState,
  reducers: {
    setEntityStatus: (state, action: PayloadAction<{ entityStatus: RequestStatusType }>) => {
      state.entityStatus = action.payload.entityStatus;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authThunk.me.fulfilled, (state, action) => {
        state.myId = action.payload.data.id;
      })
      .addCase(profileThunks.getProfile.fulfilled, (state, action) => {
        state.userProfile = action.payload.data;
      })
      .addCase(profileThunks.updateAvatar.fulfilled, (state, action) => {
        state.userProfile.photos = action.payload.photos;
      });
  },
});

const getProfile = CreateAppAsyncThunk<{ data: UserProfile }, number>(
  "profile/getProfile",
  async (userId, thunkAPI) => {
    const { rejectWithValue, dispatch } = thunkAPI;
    try {
      const res = await profileApi.getProfile(userId);
      return { data: res.data };
    } catch (e: any) {
      handleServerNetworkError(e.message, dispatch);
      return rejectWithValue(null);
    }
  },
);
const updateAvatar = CreateAppAsyncThunk<{ photos: Photos }, File>(
  "profile/updateAvatar",
  async (image: File, thunkAPI) => {
    const { rejectWithValue, dispatch } = thunkAPI;
    try {
      const res = await profileApi.updateMyProfileAvatar(image);
      if (res.data.resultCode === ResultCode.Success) {
        return { photos: res.data.data.photos };
      } else {
        handleServerAppError(res.data, dispatch);
        return rejectWithValue(null);
      }
    } catch (e) {
      handleServerNetworkError(e, dispatch);
      return rejectWithValue(null);
    }
  },
);
export const profileReducer = slice.reducer;
export const profileActions = slice.actions;

export const profileThunks = { getProfile, updateAvatar };
