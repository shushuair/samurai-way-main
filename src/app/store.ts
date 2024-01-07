import { configureStore } from "@reduxjs/toolkit";
import { authReducer, usersReducer } from "features";
import { appReducer } from "app";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    app: appReducer,
    usersStore: usersReducer,
  },
});

export type AppRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
