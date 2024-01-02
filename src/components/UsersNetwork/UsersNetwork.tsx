import React, {useEffect} from 'react';
import {usersThunks} from "../../reducers/usersReducer";
import {useAppDispatch} from "../../hooks/UseAppDispatch";
import {useSelector} from "react-redux";
import {AppRootState} from "../../redux/store";
import {User} from "../../api/typeApi";
import {UserCard} from "../UserCard/UserCard";
import s from "./UsersNetwork.module.css"
import {UsersFilter} from "./UsersFilter/UsersFilter";

export const UsersNetwork = () => {
    const dispatch = useAppDispatch()
    const users = useSelector<AppRootState, User[]>(state => state.usersStore.users)
    useEffect(() => {
        dispatch(usersThunks.getUsers({}))
    }, []);

    return (
        <div className={s.usersNetworkWrapper}>
            <UsersFilter/>
            {users.map((user, userIndex) => {
                return (
                    <UserCard
                        userIndex={userIndex}
                        key={user.id}
                        followed={user.followed}
                        id={user.id}
                        name={user.name}
                        photos={user.photos}
                        status={user.status}
                    />
                )
            })}
        </div>
    );
};
