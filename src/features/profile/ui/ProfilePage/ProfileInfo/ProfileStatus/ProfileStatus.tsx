import { Nullable, useAppDispatch } from "common";
import { useSelector } from "react-redux";
import { AppRootState } from "app/store";
import { profileThunks } from "features/profile/model/profileReducer";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { EditableSpan } from "common/components/EditableSpan/EditableSpan";

export const ProfileStatus = () => {
  const dispatch = useAppDispatch();
  let textButton = "";
  const status = useSelector<AppRootState, string>((state) => state.profileStore.myStatus);
  const userId = useSelector<AppRootState, Nullable<number>>((state) => state.profileStore.myId);
  if (status.trim() === "") {
    textButton = "Add status!!!";
  } else {
    textButton = "Edit status";
  }

  const newStatusHandler = (newTitle: string) => {
    dispatch(profileThunks.updateStatus(newTitle));
  };

  useEffect(() => {
    dispatch(profileThunks.getStatus(userId));
  }, [status]);

  return (
    <>
      <EditableSpan callback={newStatusHandler} oldValue={status} titleButton={textButton} />
    </>
  );
};
