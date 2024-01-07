import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { AppRootState } from "app/store";
import { useAppDispatch, User } from "common";
import { UserCard, UsersFilter, usersThunks } from "features";
import s from "./UsersNetwork.module.css";

export const UsersNetwork = () => {
  const users = useSelector<AppRootState, User[]>((state) => state.usersStore.users);

  return (
    <div className={s.usersNetworkWrapper}>
      <UsersFilter />
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
        );
      })}
    </div>
  );
};
