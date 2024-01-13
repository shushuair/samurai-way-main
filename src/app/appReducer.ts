import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    isInitialized: false,
    error: null as string | null,
    status: "idle" as RequestStatusType,
    filterUsers: "all" as FilterUsersType,
    pagination: {
        page: 1,
        count: 10
    },
    term: ""
};

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
        setPaginationPage: (state, action: PayloadAction<{ page: number }>) => {
            state.pagination.page = action.payload.page
        },
        setPaginationCountUsers: (state, action: PayloadAction<{ count: number }>) => {
            state.pagination.count = action.payload.count
        },
        setPaginationAll: (state, action: PayloadAction<{ count: number, page: number }>) => {
            state.pagination = action.payload
        },
        setSearchTerm: (state, action: PayloadAction<{ term: string }>) => {
            state.term = action.payload.term
        },
        setSearchTermClear: (state, action) => {
            state.term = ""
        },
    },
});

export const appReducer = slice.reducer;
export const appActions = slice.actions;
