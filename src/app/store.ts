import { configureStore } from "@reduxjs/toolkit";
import { authReducer, usersReducer } from "features";
import { appReducer } from "app";
import {profileReducer} from "../features/profile/model/profileReducer";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    app: appReducer,
    usersStore: usersReducer,
    profileStore: profileReducer
  },
});

export type AppRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
