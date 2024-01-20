import { ChangeEvent, useState } from "react";
import TextField from "@mui/material/TextField";

type EditableImgType = {
  callback: (newTitle: string, alt: string) => void;
  oldUrl: string;
  className: string;
  src: string;
  alt: string;
};

export const EditableImg = ({ callback, oldUrl, src, alt, className }: EditableImgType) => {
  const [editMode, setEditMode] = useState(false);
  const [newTitle, setNewTitle] = useState(oldUrl);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.currentTarget.value);
  };

  const onBlurHandler = () => {
    setEditMode(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      callback(newTitle, alt);
      setEditMode(false);
    }
  };
  const editModeClickHandler = () => {
    setEditMode(true);
  };

  return editMode ? (
    <TextField
      id="outlined-basic"
      label="Outlined"
      variant="outlined"
      onChange={onChangeHandler}
      onBlur={onBlurHandler}
      autoFocus={true}
      defaultValue={newTitle}
      onKeyDown={handleKeyDown}
    />
  ) : (
    <>
      <img onClick={editModeClickHandler} src={src} alt={alt} className={src ? "" : className} />
    </>
  );
};
