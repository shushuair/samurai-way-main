import s from "./ProfileAvatar.module.css";
import { ChangeEvent, useRef } from "react";
import { useAppDispatch } from "common";
import { profileThunks } from "features";

export const ProfileAvatar = () => {
  const dispatch = useAppDispatch();
  const fileInputRef = useRef<HTMLInputElement>(null!);
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files) {
      dispatch(profileThunks.updateAvatar(e.currentTarget.files[0]));
    }
  };
  return (
    <div className={s.avatarContainer}>
      <img
        src="https://www.shutterstock.com/image-vector/young-man-avatar-character-260nw-661669825.jpg"
        alt="Avatar"
        className={s.avatarImage}
      />
      <button onClick={handleButtonClick}>Add Photo</button>
      <input type="file" accept="image/*" style={{ display: "none" }} ref={fileInputRef} onChange={handleFileChange} />
    </div>
  );
};
