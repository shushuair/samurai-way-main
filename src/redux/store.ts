import {configureStore} from "@reduxjs/toolkit";
import {authReducer} from "../reducers/authReducer";
import {appReducer} from "../reducers/appReducer";
import {usersReducer} from "../reducers/usersReducer";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        app: appReducer,
        usersStore: usersReducer
    }
})

export type AppRootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch