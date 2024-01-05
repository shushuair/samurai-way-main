import {configureStore} from "@reduxjs/toolkit";

import {appReducer} from "./model";
import {authReducer, usersReducer} from "../features";




export const store = configureStore({
    reducer: {
        auth: authReducer,
        app: appReducer,
        usersStore: usersReducer
    }
})

export type AppRootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch