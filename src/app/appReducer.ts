import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  isInitialized: false,
  error: null as string | null,
  status: "idle" as RequestStatusType,
  filterUsers: "all" as FilterUsersType,
};

export type AppInitialState = typeof initialState;
export type RequestStatusType = "idle" | "loading" | "succeeded" | "failed";
export type FilterUsersType = "all" | "followed";

const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setAppError: (state, action: PayloadAction<{ error: null | string }>) => {
      state.error = action.payload.error;
    },
    setAppIsInitialized: (state, action: PayloadAction<{ isInitialized: boolean }>) => {
      state.isInitialized = action.payload.isInitialized;
    },
    setAppStatus: (state, action: PayloadAction<{ status: RequestStatusType }>) => {
      state.status = action.payload.status;
    },
    setFilterUsers: (state, action: PayloadAction<{ filterUsers: FilterUsersType }>) => {
      state.filterUsers = action.payload.filterUsers;
    },
  },
});

export const appReducer = slice.reducer;
export const appActions = slice.actions;
