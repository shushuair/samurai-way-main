import React from "react";
import { Clock, ProfileAvatar, ProfileFullName, ProfileSocNetworks } from "features";
import { ProfileStatus } from "features/profile/ui/ProfilePage/ProfileInfo/ProfileStatus/ProfileStatus";

export const ProfileInfo = () => {
  return (
    <div>
      <ProfileAvatar />
      <ProfileFullName />
      <ProfileStatus />
      <ProfileSocNetworks />
      <Clock />
    </div>
  );
};
