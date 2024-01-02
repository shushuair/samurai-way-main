import React, {useEffect} from 'react';
import {usersThunks} from "../../reducers/usersReducer";
import {useAppDispatch} from "../../hooks/UseAppDispatch";
import {useSelector} from "react-redux";
import {AppRootState} from "../../redux/store";
import {User} from "../../api/typeApi";
import {UserCard} from "../UserCard/UserCard";

export const UsersNetwork = () => {
    const dispatch = useAppDispatch()
    const users = useSelector<AppRootState, User[]>(state => state.usersStore.users)
    useEffect(() => {
        dispatch(usersThunks.getUsers())
    }, []);

    return (
        <div>
            {users.map(user => {
                return (
                    <UserCard
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
