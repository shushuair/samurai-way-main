import {BaseResponse} from "../api/typeApi";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {AppDispatch, AppRootState} from "../redux/store";

export const CreateAppAsyncThunk = createAsyncThunk.withTypes<{
    state: AppRootState
    dispatch: AppDispatch
    rejectValue: null | RejectValueError
}>()

export type RejectValueError = {
    data: BaseResponse
    showGlobalError?: boolean
}

