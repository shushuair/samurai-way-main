import React, { useEffect } from "react";
import "app/App.css";
import { useSelector } from "react-redux";
import { AppRootState } from "app/store";
import { useAppDispatch } from "common";
import { authThunk } from "features";
import { Profile } from "features";

export function App() {
  const isLoggedIn = useSelector<AppRootState, boolean>((state) => state.auth.isLoggedIn);
  const isLoading = useSelector<AppRootState, boolean>((state) => state.auth.isLoading);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(authThunk.me());
  }, []);

  if (!isLoggedIn && !isLoading) {
    return <div>Login Page</div>;
  }

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <div className="App">
      <Profile />
    </div>
  );
}
