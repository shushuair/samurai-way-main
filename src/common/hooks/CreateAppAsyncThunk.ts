import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppDispatch, AppRootState } from "app/store";
import { BaseResponse } from "common";

export const CreateAppAsyncThunk = createAsyncThunk.withTypes<{
  state: AppRootState;
  dispatch: AppDispatch;
  rejectValue: null | RejectValueError;
}>();

export type RejectValueError = {
  data: BaseResponse;
  showGlobalError?: boolean;
};
