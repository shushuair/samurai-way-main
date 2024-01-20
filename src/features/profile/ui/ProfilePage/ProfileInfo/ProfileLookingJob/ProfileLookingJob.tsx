import React, { ChangeEvent } from "react";
import { useSelector } from "react-redux";
import { AppRootState } from "app/store";
import Checkbox from "@mui/material/Checkbox";
import { useAppDispatch } from "common";
import { profileThunks } from "features/profile/model/profileReducer";
import { EditableSpan } from "common/components/EditableSpan/EditableSpan";

export const ProfileLookingJob = () => {
  const lookingJob = useSelector<AppRootState, boolean>((state) => state.profileStore.userProfile.lookingForAJob);
  const lookingJobDescription = useSelector<AppRootState, string>(
    (state) => state.profileStore.userProfile.lookingForAJobDescription,
  );
  const dispatch = useAppDispatch();

  const lookingJobChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(profileThunks.updateProfile({ lookingForAJob: e.currentTarget.checked }));
  };

  const changeJobDescriptionHandler = (newValue: string) => {
    dispatch(profileThunks.updateProfile({ lookingForAJobDescription: newValue }));
  };

  return (
    <div>
      <h3>Looking for a job</h3>
      <Checkbox checked={lookingJob} onChange={lookingJobChangeHandle} inputProps={{ "aria-label": "controlled" }} />
      {lookingJob ? (
        <EditableSpan
          callback={changeJobDescriptionHandler}
          oldValue={lookingJobDescription}
          titleButton={"Add job description"}
        />
      ) : (
        <></>
      )}
    </div>
  );
};
