import s from "features/profile/ui/ProfilePage/ProfileInfo/ProfileFullName/ProfileFullName.module.css";
import { useAppDispatch } from "common";
import { useSelector } from "react-redux";
import { AppRootState } from "app/store";
import EditIcon from "@mui/icons-material/Edit";
import { profileThunks } from "features/profile/model/profileReducer";
import { EditableSpan } from "common/components/EditableSpan/EditableSpan";
import { useState } from "react";

export const ProfileFullName = () => {
  const oldValue = useSelector<AppRootState, string>((state) => state.profileStore.userProfile.fullName);

  const dispatch = useAppDispatch();

  const changeFullNameHandler = (newValue: string) => {
    dispatch(profileThunks.updateProfile({ fullName: newValue }));
  };
  return (
    <div className={s.fullNameContainer}>
      <EditableSpan callback={changeFullNameHandler} oldValue={oldValue} titleButton={"edit Name"} />
    </div>
  );
};
