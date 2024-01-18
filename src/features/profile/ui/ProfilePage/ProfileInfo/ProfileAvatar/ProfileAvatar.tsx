import React, { ChangeEvent, useRef, useState } from "react";
import { Photos, useAppDispatch } from "common";
import { profileThunks } from "features/index";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import s from "features/profile/ui/ProfilePage/ProfileInfo/ProfileAvatar/ProfileAvatar.module.css";
import { useSelector } from "react-redux";
import { AppRootState } from "app/store";

const Ava = "https://www.shutterstock.com/image-vector/young-man-avatar-character-260nw-661669825.jpg";

export const ProfileAvatar = () => {
  const dispatch = useAppDispatch();
  const data = useSelector<AppRootState, Photos>((state) => state.profileStore.userProfile.photos);
  const [editMode, setEditMode] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const avatarChangeMutation = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files) {
      setSelectedFile(e.currentTarget.files[0]);
      dispatch(profileThunks.updateAvatar(e.currentTarget.files[0]));
    }
  };

  const handleAvatarChanged = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const avatarSrc = selectedFile ? URL.createObjectURL(selectedFile) : data?.small || Ava;

  return (
    <div className={s.avatarContainer}>
      <img src={avatarSrc} alt="Аватар" className={s.avatarImage} />
      <CameraAltIcon onClick={handleAvatarChanged}></CameraAltIcon>
      <input className={s.inputFile} type="file" ref={fileInputRef} onChange={avatarChangeMutation} />
    </div>
  );
};
