import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AppRootState } from "app/store";
import { Nullable, useAppDispatch, UserProfile } from "common";
import s from "./ProfilePage.module.css";
import { profileThunks } from "features";
import { ProfileInfo } from "features/profile/ui/ProfilePage/ProfileInfo/ProfileInfo";

export const ProfilePage = () => {
  const dispatch = useAppDispatch();
  const userProfileId = useSelector<AppRootState, Nullable<number>>((state) => state.profileStore.myId);

  useEffect(() => {
    if (userProfileId) {
      dispatch(profileThunks.getProfile(userProfileId));
    }
  }, []);

  return (
    <div className={s.content}>
      <h1>{userProfileId}</h1>
      <ProfileInfo />
    </div>
  );
};
