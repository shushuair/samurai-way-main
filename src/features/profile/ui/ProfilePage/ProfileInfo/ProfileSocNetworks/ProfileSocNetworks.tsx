import { useSelector } from "react-redux";
import { AppRootState } from "app/store";
import { Contacts, useAppDispatch } from "common";
import s from "./ProfileSocNetworks.module.css";
import { EditableImg } from "common/components/EditableSpanImg/EditableSpanImg";
import { profileThunks } from "features/profile/model/profileReducer";
import Checkbox from "@mui/material/Checkbox";
import React, { ChangeEvent, useState } from "react";
import vk from "../../../../../../common/assets/networks/icons8-vk-96.png";
import github from "../../../../../../common/assets/networks/icons8-github-96.png";
import facebook from "../../../../../../common/assets/networks/icons8-facebook-96.png";
import instagram from "../../../../../../common/assets/networks/icons8-instagram-96.png";
import twitter from "../../../../../../common/assets/networks/icons8-twitter-96.png";
import website from "../../../../../../common/assets/networks/icons8-mainlink-96.png";
import mainLink from "../../../../../../common/assets/networks/icons8-mainlink-96.png";
import youtube from "../../../../../../common/assets/networks/icons8-youtube-96.png";

export const ProfileContacts = () => {
  const icons = [facebook, vk, github, instagram, twitter, website, youtube, mainLink];
  const networksLogo = useSelector<AppRootState, Contacts>((state) => state.profileStore.userProfile.contacts);
  const dispatch = useAppDispatch();
  const [showLink, setShowLink] = useState(false);
  const updateURLSocNetwork = (newURL: string, key: string) => {
    dispatch(profileThunks.updateProfile({ contacts: { ...networksLogo, [key]: newURL } }));
  };

  const showLinkChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setShowLink(!showLink);
  };
  return (
    <div>
      <Checkbox checked={showLink} onChange={showLinkChangeHandler} inputProps={{ "aria-label": "controlled" }} />
      {showLink ? (
        <EditableImg
          callback={updateURLSocNetwork}
          oldUrl={networksLogo.facebook}
          className={s.logoAbsent}
          src={icons[0]}
          alt="facebook"
        />
      ) : (
        <img src={icons[0]} alt="old value" />
      )}
      {showLink ? (
        <EditableImg
          callback={updateURLSocNetwork}
          oldUrl={networksLogo.instagram}
          className={s.logoAbsent}
          src={icons[3]}
          alt="instagram"
        />
      ) : (
        <a href={networksLogo.instagram} target="_blank" rel="noopener noreferrer">
          <img src={icons[3]} alt="old value" />
        </a>
      )}
    </div>
  );
};

// <img
//     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAGr6MVLAEzC-6TOV0ZXJHnz1AYqJKSt1HrQ&usqp=CAU"
//     alt="website"
//     className={networksLogo.website ? "" : s.logoAbsent}
// />
// <img
//     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKtc3iRceK_FFfGoSKp-MOY0ZIJmA4qzM1Xw&usqp=CAU"
//     alt="instagram"
//     className={networksLogo.instagram ? "" : s.logoAbsent}
// />
// <img
//     src="data:image/png;base64,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"
//     alt="twitter"
//     className={networksLogo.twitter ? "" : s.logoAbsent}
// />
// <img
//     src="data:image/png;base64,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"
//     alt="github"
//     className={networksLogo.facebook ? "" : s.logoAbsent}
// />
// <img
//     src="data:image/png;base64,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"
//     alt="vk"
//     className={networksLogo.facebook ? "" : s.logoAbsent}
// />
// <img
//     src="data:image/png;base64,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"
//     alt="youtube"
//     className={networksLogo.facebook ? "" : s.logoAbsent}
// />
// <img
//     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb02r4t1E76DjD_-k1Qq2nSN2XkgzOsqBAng&usqp=CAU"
//     alt="main link"
//     className={networksLogo.facebook ? "" : s.logoAbsent}
// />
