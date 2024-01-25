import { useSelector } from "react-redux"
import { AppRootState } from "app/store"
import { Contacts, useAppDispatch } from "common"
import s from "./ProfileSocNetworks.module.css"
import { EditableSpanImg } from "common"
import { profileThunks } from "features"
import Checkbox from "@mui/material/Checkbox"
import React, { useState } from "react"
import vk from "common/assets/networks/icons8-vk-96.png"
import github from "common/assets/networks/icons8-github-96.png"
import facebook from "common/assets/networks/icons8-facebook-96.png"
import instagram from "common/assets/networks/icons8-instagram-96.png"
import twitter from "common/assets/networks/icons8-twitter-96.png"
import website from "common/assets/networks/icons8-linkedin-96.png"
import mainLink from "common/assets/networks/icons8-mainlink-96.png"
import youtube from "common/assets/networks/icons8-youtube-96.png"

export const ProfileContacts = () => {
  const icons = [facebook, vk, github, instagram, twitter, website, youtube, mainLink]
  const networksLogo = useSelector<AppRootState, Contacts>((state) => state.profileStore.userProfile.contacts)
  const dispatch = useAppDispatch()
  const [showLink, setShowLink] = useState(false)
  const updateURLSocNetwork = (newURL: string, key: string) => {
    dispatch(profileThunks.updateProfile({ contacts: { ...networksLogo, [key]: newURL } }))
  }

  const showLinkChangeHandler = () => {
    setShowLink(!showLink)
  }
  return (
    <div>
      <Checkbox checked={showLink} onChange={showLinkChangeHandler} inputProps={{ "aria-label": "controlled" }} />
      {showLink ? (
        <EditableSpanImg
          callback={updateURLSocNetwork}
          oldUrl={networksLogo.facebook}
          className={s.logoAbsent}
          src={icons[0]}
          alt="facebook"
        />
      ) : (
        <a href={networksLogo.instagram ? networksLogo.instagram : "#"} target="_blank" rel="noopener noreferrer">
          <img src={icons[0]} alt="old value" />
        </a>
      )}

      {showLink ? (
        <EditableSpanImg
          callback={updateURLSocNetwork}
          oldUrl={networksLogo.instagram}
          className={s.logoAbsent}
          src={icons[3]}
          alt="instagram"
        />
      ) : (
        <a href={networksLogo.instagram ? networksLogo.instagram : "#"} target="_blank" rel="noopener noreferrer">
          <img src={icons[3]} alt="old value" />
        </a>
      )}

      {showLink ? (
        <EditableSpanImg
          callback={updateURLSocNetwork}
          oldUrl={networksLogo.vk}
          className={s.logoAbsent}
          src={icons[1]}
          alt="vk"
        />
      ) : (
        <a href={networksLogo.vk ? networksLogo.vk : "#"} target="_blank" rel="noopener noreferrer">
          <img src={icons[1]} alt="old value" />
        </a>
      )}

      {showLink ? (
        <EditableSpanImg
          callback={updateURLSocNetwork}
          oldUrl={networksLogo.github}
          className={s.logoAbsent}
          src={icons[2]}
          alt="github"
        />
      ) : (
        <a href={networksLogo.github ? networksLogo.github : "#"} target="_blank" rel="noopener noreferrer">
          <img src={icons[2]} alt="old value" />
        </a>
      )}

      {showLink ? (
        <EditableSpanImg
          callback={updateURLSocNetwork}
          oldUrl={networksLogo.twitter}
          className={s.logoAbsent}
          src={icons[4]}
          alt="twitter"
        />
      ) : (
        <a href={networksLogo.twitter ? networksLogo.twitter : "#"} target="_blank" rel="noopener noreferrer">
          <img src={icons[4]} alt="old value" />
        </a>
      )}

      {showLink ? (
        <EditableSpanImg
          callback={updateURLSocNetwork}
          oldUrl={networksLogo.website}
          className={s.logoAbsent}
          src={icons[5]}
          alt="website"
        />
      ) : (
        <a href={networksLogo.website ? networksLogo.website : "#"} target="_blank" rel="noopener noreferrer">
          <img src={icons[5]} alt="old value" />
        </a>
      )}

      {showLink ? (
        <EditableSpanImg
          callback={updateURLSocNetwork}
          oldUrl={networksLogo.youtube}
          className={s.logoAbsent}
          src={icons[6]}
          alt="youtube"
        />
      ) : (
        <a href={networksLogo.youtube ? networksLogo.youtube : "#"} target="_blank" rel="noopener noreferrer">
          <img src={icons[6]} alt="old value" />
        </a>
      )}

      {showLink ? (
        <EditableSpanImg
          callback={updateURLSocNetwork}
          oldUrl={networksLogo.mainLink}
          className={s.logoAbsent}
          src={icons[7]}
          alt="mainLink"
        />
      ) : (
        <a href={networksLogo.mainLink ? networksLogo.mainLink : "#"} target="_blank" rel="noopener noreferrer">
          <img src={icons[7]} alt="old value" />
        </a>
      )}
    </div>
  )
}
