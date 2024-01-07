import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  CreateAppAsyncThunk,
  handleServerAppError,
  handleServerNetworkError,
  ResultCode,
  User,
  UserResponse,
} from "common";
import { appActions, RequestStatusType } from "app";
import { usersApi } from "features";

type EntityStatus = "idle" | "loading" | "succeeded" | "failed";
export type DomainUser = User & {
  entityStatus: EntityStatus;
};
//entityStatus to disable button follow/unfollow when click by mistake twice
const slice = createSlice({
  name: "users",
  initialState: {
    users: [] as DomainUser[],
    totalCount: 0,
  },
  reducers: {
    setEntityStatus: (state, action: PayloadAction<{ entityStatus: RequestStatusType; userId: number }>) => {
      const userIdIndex = state.users.findIndex((user) => user.id === action.payload.userId);
      state.users[userIdIndex].entityStatus = action.payload.entityStatus;
    },
  },
  extraReducers: (builder) => {
    //builder to check test
    builder
      .addCase(usersThunks.getUsers.fulfilled, (state, action) => {
        return {
          users: action.payload.users.items.map((user) => ({ ...user, entityStatus: "idle" })),
          totalCount: action.payload.users.totalCount,
        };
      })
      .addCase(usersThunks.followUser.fulfilled, (state, action) => {
        const user = state.users.find((user) => user.id === action.payload.userId);
        if (user) {
          user.followed = true;
        }
      })
      .addCase(usersThunks.unFollowUser.fulfilled, (state, action) => {
        const user = state.users.find((user) => user.id === action.payload.userId);
        if (user) {
          user.followed = false;
        }
      });
  },
});

const getUsers = CreateAppAsyncThunk<
  { users: UserResponse },
  { count?: number; page?: number; term?: string; friend?: boolean }
>("users/getUsers", async (arg, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;
  dispatch(appActions.setAppStatus({ status: "loading" }));

  try {
    const res = await usersApi.getUsers({ count: arg.count, page: arg.page, term: arg.term, friend: arg.friend });
    dispatch(appActions.setAppStatus({ status: "succeeded" }));
    return { users: res.data };
  } catch (e) {
    handleServerNetworkError(e, dispatch);
    return rejectWithValue(null);
  }
});

const followUser = CreateAppAsyncThunk<{ userId: number }, number>("users/followUser", async (userId, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;
  dispatch(appActions.setAppStatus({ status: "loading" }));
  dispatch(usersActions.setEntityStatus({ entityStatus: "loading", userId }));
  try {
    const res = await usersApi.followUser(userId);
    if (res.data.resultCode === ResultCode.Success) {
      dispatch(appActions.setAppStatus({ status: "succeeded" }));
      dispatch(usersActions.setEntityStatus({ entityStatus: "succeeded", userId }));
      return { userId };
    } else {
      handleServerAppError(res.data, dispatch);
      dispatch(usersActions.setEntityStatus({ entityStatus: "failed", userId }));
      return rejectWithValue(null);
    }
  } catch (e) {
    handleServerNetworkError(e, dispatch);
    return rejectWithValue(null);
  }
});

const unFollowUser = CreateAppAsyncThunk<{ userId: number }, number>("users/unFollowUser", async (userId, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;
  dispatch(appActions.setAppStatus({ status: "loading" }));
  dispatch(usersActions.setEntityStatus({ entityStatus: "loading", userId }));
  try {
    const res = await usersApi.unFollowUser(userId);
    if (res.data.resultCode === ResultCode.Success) {
      dispatch(appActions.setAppStatus({ status: "succeeded" }));
      dispatch(usersActions.setEntityStatus({ entityStatus: "succeeded", userId }));
      return { userId };
    } else {
      handleServerAppError(res.data, dispatch);
      dispatch(usersActions.setEntityStatus({ entityStatus: "failed", userId }));
      return rejectWithValue(null);
    }
  } catch (e) {
    handleServerNetworkError(e, dispatch);
    return rejectWithValue(null);
  }
});

// const getUsers = CreateAppAsyncThunk<{users: UserResponse}, void>(
//     "users/getUsers",
//     async (_ , thunkAPI) => {
//         const {dispatch, rejectWithValue} = thunkAPI
//         dispatch(appActions.setAppStatus({status: "loading"}))
//         try {
//             const res = await usersApi.getUsers()
//             dispatch(appActions.setAppStatus({status: "succeeded"}))
//             return {users: res.data}
//         } catch (e) {
//             handleServerNetworkError(e, dispatch)
//             return rejectWithValue(null)
//         }
//     }
// )

export const usersThunks = { getUsers, followUser, unFollowUser };
export const usersActions = slice.actions;
export const usersReducer = slice.reducer;
