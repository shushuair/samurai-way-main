import React, {useEffect} from 'react';
import {usersThunks} from "../../model/usersReducer";
import {useAppDispatch} from "common";
import {useSelector} from "react-redux";

import {User} from "common";
import {UserCard} from "../UserCard";
import s from "./UsersNetwork.module.css"
import {UsersFilter} from "./UsersFilter";
import {AppRootState} from "../../../../app";

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
