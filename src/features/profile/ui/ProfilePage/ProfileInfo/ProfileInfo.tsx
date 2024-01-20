import React from "react";
import { Clock, ProfileAvatar, ProfileContacts, ProfileFullName } from "features";
import { ProfileStatus } from "features/profile/ui/ProfilePage/ProfileInfo/ProfileStatus/ProfileStatus";
import { ProfileLookingJob } from "features/profile/ui/ProfilePage/ProfileInfo/ProfileLookingJob/ProfileLookingJob";
import { containerClasses } from "@mui/material";

export const ProfileInfo = () => {
  return (
    <div>
      <ProfileAvatar />
      <ProfileFullName />
      <ProfileStatus />
      <ProfileLookingJob />
      <ProfileContacts />
      <Clock />
    </div>
  );
};
