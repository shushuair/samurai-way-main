import React, {useEffect} from 'react';
import './App.css';
import {UsersNetwork} from "./components/UsersNetwork/UsersNetwork";
import {useSelector} from "react-redux";
import {AppRootState} from "./redux/store";
import {useAppDispatch} from "./hooks/UseAppDispatch";
import {appActions} from "./reducers/appReducer";
import {authThunk} from "./reducers/authReducer";
import {usersThunks} from "./reducers/usersReducer";

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


