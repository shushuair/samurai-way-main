import React from "react";
import "./App.css";
import { UsersNetwork } from "features";
import { useSelector } from "react-redux";
import { AppRootState } from "./store";
import { useAppDispatch } from "common";

export function App() {
    const isLoggedIn = useSelector<AppRootState, boolean>(state => state.auth.isLoggedIn)
    const dispatch = useAppDispatch()
    // useEffect(() => {
    //     dispatch(authThunk.me())
    // }, []);

  return (
    <div className="App">
      <UsersNetwork />
    </div>
  );
}


