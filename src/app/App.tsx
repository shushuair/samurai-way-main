import React from "react";
import "app/App.css";
import { useSelector } from "react-redux";
import { AppRootState } from "app/store";
import { useAppDispatch } from "common";
import { UsersNetwork } from "features";

export function App() {
  const isLoggedIn = useSelector<AppRootState, boolean>((state) => state.auth.isLoggedIn);
  const dispatch = useAppDispatch();
  // useEffect(() => {
  //     dispatch(authThunk.me())
  // }, []);

  return (
    <div className="App">
      <UsersNetwork />
    </div>
  );
}
